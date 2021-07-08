import {
  Connection as TypeConnection,
  ConnectionManager,
  ConnectionOptions,
  createConnection,
  getConnectionManager,
} from "typeorm";
import { env } from "../utils/env";
import { ConnectionType } from "./types";

export class Connection {
  private static manager: ConnectionManager = getConnectionManager();

  public static async connect(): Promise<TypeConnection> {
    return Connection.get();
  }

  public static async get(): Promise<TypeConnection> {
    const CONNECTION_NAME = "default";
    let connection: TypeConnection;
    if (Connection.manager.has(CONNECTION_NAME)) {
      connection = await Connection.manager.get(CONNECTION_NAME);
      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    } else {
      const connectionOptions = this.getConnectionOptions();
      connection = await createConnection(connectionOptions);
      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    }

    return connection;
  }

  public static getConnectionOptions(): ConnectionOptions {
    return {
      name: "default",
      type: env<ConnectionType>("TYPEORM_CONNECTION"),
      host: env<string>("TYPEORM_HOST", "localhost"),
      port: env<number>("TYPEORM_PORT", 3306),
      username: env<string>("TYPEORM_USERNAME", "root"),
      password: env<string>("TYPEORM_PASSWORD", ""),
      database: env<string>("TYPEORM_DATABASE", ""),
      synchronize: env<boolean>("TYPEORM_SYNCHRONIZE", true),
      logging: env<boolean>("TYPEORM_LOGGING", true),
      entities: [__dirname + "/entities/**/*.{ts,js}"],
      migrations: [__dirname + "/migrations/**/*.{ts,js}"],
      subscribers: [__dirname + "/subscribers/**/*.{ts,js}"],
      cli: {
        entitiesDir: __dirname + "/entities/",
        migrationsDir: __dirname + "/migrations/",
        subscribersDir: __dirname + "/subscribers/",
      },
    } as ConnectionOptions;
  }
}
