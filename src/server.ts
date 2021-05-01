import { createExpressServer, useContainer } from "routing-controllers";
import Container from "typedi";
import controllers from "./controllers";
import interceptors from "./interceptors";

useContainer(Container);

const server = createExpressServer({
  cors: true,
  controllers,
  interceptors,
  // controllers: [__dirname + "/controllers/*{.js,.ts}"],
  // middlewares: [__dirname + "/middlewares/*{.js,.ts}"],
});

export { server };
