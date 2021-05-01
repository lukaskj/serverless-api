import { server } from "./server";
import serverless from "serverless-http";
import ServerlessHttp from "serverless-http";
// Cache
let hdlr: ServerlessHttp.Handler;
type HandlerEvent = AWSLambda.APIGatewayProxyEvent | AWSLambda.APIGatewayProxyEventV2;
type HandlerContext = AWSLambda.Context;

export async function handler(event: HandlerEvent, context: HandlerContext) {
  if (!hdlr) {
    hdlr = serverless(server);
  }

  const res = await hdlr(event, context);

  return res;
}
