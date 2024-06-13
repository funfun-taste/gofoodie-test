import {connectionHolder, getDataSource} from "@/apis/config/datasource";
import { ObjectLiteral, Repository } from 'typeorm';

interface Class {
  new (...args: any[]): any;
}

const serviceAsyncProxy = (obj: any) =>
  new Proxy(obj, {
    get(target, key) {
      const value = target[key];
      if (typeof value == 'function') {
        return async function (...args: any) {
          await connectionHolder.promise; // getDataSource 의 처음 db initial 을 기다림
          return value.call(target, ...args);
        };
      }
      return value;
    },
  });

export class Provider {
  // Repository 와 Service 를 Singleton 으로 관리하는 객채
  private static repositories: Map<string, Repository<ObjectLiteral>> =
    new Map();
  private static services: Map<string, ObjectLiteral> = new Map();

  static registerService<T extends ObjectLiteral>(
    constructor: new () => T,
    obj?: any,
  ) {
    console.log(`register services ${constructor.name}`);
    if (!Provider.services.has(constructor.name))
      Provider.services.set(
        constructor.name,
        obj ?? serviceAsyncProxy(new constructor()), // service 의 모든 함수는 connectionHolder 를 거쳐감
      );
  }

  static registerRepository<Entity extends Class>(entity: Entity) {
    console.log(`register repository ${entity.name}`);
    if (!Provider.repositories.has(entity.name))
      Provider.repositories.set(
        entity.name,
        getDataSource().getRepository(entity),
      );
  }

  static getService<Service extends ObjectLiteral>(
    constructor: new (...args: any[]) => Service,
  ): Service {
    !Provider.services.has(constructor.name) &&
    Provider.registerService(constructor);
    return Provider.services.get(constructor.name) as Service;
  }

  static getRepository<Entity extends Class>(
    constructor: new (...args: any[]) => Entity,
  ): Repository<Entity> {
    !Provider.repositories.has(constructor.name) &&
    Provider.registerRepository(constructor);
    return Provider.repositories.get(constructor.name) as Repository<Entity>;
  }
}

export function Service(constructor: new (...args: any[]) => any) {
  // @Service  데코레이션,  Provider 에  해등 클래스가 스캔되면 등록된다
  Provider.registerService(constructor);
}

export function Inject<Service extends ObjectLiteral>(
  service: new (...args: any[]) => Service,
): any {
  return (target: ObjectLiteral, filedName: string, index?: number) => {
    Object.defineProperty(target, filedName, {
      writable: false,
      value: Provider.getService(service),
    });
  };
}

export function InjectRepository<Entity extends Class>(entity: Entity): any {
  return (target: ObjectLiteral, filedName: string, index?: number) => {
    Object.defineProperty(target, filedName, {
      writable: false,
      value: Provider.getRepository(entity),
    });
  };
}