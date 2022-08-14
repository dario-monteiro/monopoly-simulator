import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('jogo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/simular')
  simular(): any {
    return this.appService.simular();
  }
}
