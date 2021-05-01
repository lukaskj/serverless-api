import { Get, JsonController } from "routing-controllers";
import { Result, ResultSuccess } from "../contracts/result/result";

@JsonController()
export class IndexController {
  @Get("/")
  index(): Result<unknown> {
    return new ResultSuccess();
  }
}
