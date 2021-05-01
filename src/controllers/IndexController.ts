import { Body, Controller, Get, Post } from "routing-controllers";

@Controller()
export class IndexController {
  @Get("/")
  index(): unknown {
    return {
      success: true,
    };
  }

  @Post("/")
  testBody(@Body() body: { test: string }): string {
    return body.test;
  }
}
