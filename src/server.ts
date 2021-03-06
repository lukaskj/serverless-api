import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import controllers from "./controllers";
import interceptors from "./interceptors";

useContainer(Container);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createServer(): Promise<any> {
  return createExpressServer({
    cors: true,
    controllers,
    interceptors,
    // controllers: [__dirname + "/controllers/*{.js,.ts}"],
    // middlewares: [__dirname + "/middlewares/*{.js,.ts}"],
  });
}
