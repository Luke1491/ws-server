import { Controller, Get } from "@nestjs/common";
import { Logger } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  helloWorld() {
    Logger.log("Hello World!");
    return this.appService.getHello();
  }

  //health check
  @Get("/health")
  healthCheck() {
    Logger.log("Health Check!");
    return "Health Check!";
  }
}
