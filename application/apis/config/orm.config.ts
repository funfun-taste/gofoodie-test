import { DataSourceOptions } from 'typeorm';
import {UserEntity} from "@/apis/entities/users/user.entity";

const ORM_CONFIG: DataSourceOptions = {
  type: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  host: process.env.DB_HOST || 'localhost',
  entities: [UserEntity],
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_DATABASE || 'cgoing',
  synchronize: false,
  logging: true,
};

export default ORM_CONFIG;