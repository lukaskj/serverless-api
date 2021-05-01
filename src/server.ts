import { createExpressServer } from "routing-controllers";
import { IndexController } from "./controllers/IndexController";
import { ResultInterceptor } from "./interceptors/ResultInterceptor";

const server = createExpressServer({
  cors: true,
  controllers: [IndexController],
  // middlewares: [ResultMiddleware],
  interceptors: [ResultInterceptor],
  // controllers: [__dirname + "/controllers/*{.js,.ts}"],
  // middlewares: [__dirname + "/middlewares/*{.js,.ts}"],
});

export { server };
