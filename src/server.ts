import { createExpressServer } from "routing-controllers";
import controllers from "./controllers";
import interceptors from "./interceptors";

const server = createExpressServer({
  cors: true,
  controllers,
  interceptors,
  // controllers: [__dirname + "/controllers/*{.js,.ts}"],
  // middlewares: [__dirname + "/middlewares/*{.js,.ts}"],
});

export { server };
