import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Book } from "./entity/Book";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost", // Docker を使用している場合は "localhost" または "127.0.0.1"
  port: 3306, // MySQL のデフォルトポート
  username: "user", // docker-compose.yml で設定したユーザー名
  password: "password", // docker-compose.yml で設定したパスワード
  database: "test_db", // docker-compose.yml で設定したデータベース名
  synchronize: false,
  logging: true,
  entities: [User, Book],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});
