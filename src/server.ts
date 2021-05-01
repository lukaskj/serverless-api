import { createExpressServer } from "routing-controllers";
import { IndexController } from "./controllers/IndexController";

const server = createExpressServer({
  controllers: [IndexController],
  // controllers: [__dirname + "/controllers/*{.js,.ts}"],
  // middlewares: [__dirname + "/middlewares/*{.js,.ts}"],
});

export { server };
