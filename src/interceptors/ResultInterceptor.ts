/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, Interceptor, InterceptorInterface } from "routing-controllers";
import { Result } from "../contracts/result/result";
import { HttpStatusCode } from "../utils/http-status-codes";

@Interceptor()
export class ResultInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): void {
    if (content instanceof Result) {
      action.response.status(content.status || HttpStatusCode.OK);
    }
    return content;
  }
}
