import { Get, JsonController } from "routing-controllers";
import { Injectable } from "../contracts/injectable";
import { Result, ResultSuccess } from "../contracts/result/result";
import { User } from "../database/entities/User";
import { env } from "../utils/env";

@JsonController()
@Injectable()
export class IndexController {
  @Get("/")
  async index(): Promise<Result<unknown>> {
    const user = await User.find();
    console.log(user);
    // (await Connection.get()).getRepository(User).find({ id: "1" });
    return new ResultSuccess<string>(env<string>("TEST", "not ok"));
  }
}
