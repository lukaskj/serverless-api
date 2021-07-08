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

  public static async get(): Promise<Connection> {
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
    }

    return connection;
  }

  private static getConnectionOptions(): ConnectionOptions {
    const options: ConnectionOptions = {
      name: "default",
      type: env<ConnectionType>("DB_TYPE"),
      synchronize: env<boolean>("DB_SYNC", true),
      logging: env<boolean>("DB_SYNC", true),
      host: env<string>("DB_HOST", "localhost"),
      port: env<number>("DB_PORT", 3306),
      username: env<string>("DB_USERNAME", "root"),
      password: env<string>("DB_PASSWORD", ""),
      database: env<string>("DB_DATABASE", ""),
    };
    if (options.cli) {
      console.log(options);
    }
    return options;
  }
}
