import { Get, JsonController } from "routing-controllers";
import { Injectable } from "../contracts/injectable";
import { Result, ResultSuccess } from "../contracts/result/result";
import { env } from "../utils/env";

@JsonController()
@Injectable()
export class IndexController {
  @Get("/")
  async index(): Promise<Result<unknown>> {
    return new ResultSuccess<unknown[]>([env<string>("TYPEORM_DRIVER", "env not ok")]);
  }
}
