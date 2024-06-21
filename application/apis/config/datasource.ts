import { DataSource } from 'typeorm';
import 'reflect-metadata';
import ORM_CONFIG from './orm.config';
import Holder from "@/apis/lib/Holder";

let dataSource: DataSource | undefined;

export const connectionHolder = new Holder();

export const getDataSource = () => {
  if (!dataSource) {
    dataSource = new DataSource(ORM_CONFIG);
    console.log(`create DataSource`);
    dataSource.initialize().then(() => {
      console.log(`connect complete`);
      connectionHolder.resolve();
    });
  }
  return dataSource;
};