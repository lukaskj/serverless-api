import Koa from "koa";
import Router from "@koa/router";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

const server = new Koa();

server.use(cors());
server.use(bodyParser());
server.use(json());

const router = new Router();
router.get("/", async (ctx, next) => {
  ctx.body = {
    success: true,
  };
  await next();
});

server.use(router.routes());

export { server };
