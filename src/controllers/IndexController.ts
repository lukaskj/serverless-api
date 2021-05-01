import { Body, Get, JsonController, Post } from "routing-controllers";
import { Result, ResultSuccess } from "../contracts/result/result";

@JsonController()
export class IndexController {
  @Get("/")
  index(): Result<unknown> {
    return new ResultSuccess();
  }

  @Post("/")
  testBody(@Body() body: { test: string }): string {
    return body.test;
  }
}
