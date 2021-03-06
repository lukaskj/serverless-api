import { Get, JsonController } from "routing-controllers";
import { Result, ResultSuccess } from "../contracts/result/result";
import { Injectable } from "../contracts/injectable";
import { env } from "../utils/env";

@JsonController()
@Injectable()
export class IndexController {
  @Get("/")
  index(): Result<unknown> {
    return new ResultSuccess<string>(env<string>("TYPEORM_PORT", "not ok"));
  }
}
