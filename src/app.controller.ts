import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('Default API')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): { link: string; main: any } {
    return this.appService.getMain();
  }
}
