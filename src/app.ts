import "reflect-metadata";
import { server } from "./server";
import ServerlessHttp from "serverless-http";
// Cache
let hdlr: ServerlessHttp.Handler;
type HandlerEvent = AWSLambda.APIGatewayProxyEvent | AWSLambda.APIGatewayProxyEventV2;
type HandlerResult = AWSLambda.APIGatewayProxyResult | AWSLambda.APIGatewayProxyStructuredResultV2;
type HandlerContext = AWSLambda.Context;

export async function handler(event: HandlerEvent, context: HandlerContext): Promise<HandlerResult> {
  if (!hdlr) {
    hdlr = ServerlessHttp(server);
  }

  return await hdlr(event, context);
}
