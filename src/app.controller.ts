import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StatusResponse } from './status.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): StatusResponse {
    return {
      status: 200,
      message: this.appService.getHello(),
    };
  }
}
