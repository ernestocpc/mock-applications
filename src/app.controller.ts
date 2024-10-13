import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPurchase(): string {
    return this.appService.getPurchase();
  }

  @Get('user')
  getUser(): string {
    return this.appService.getUser();
  }
}
