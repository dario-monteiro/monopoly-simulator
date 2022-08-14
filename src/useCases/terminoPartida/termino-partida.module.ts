import { Module } from '@nestjs/common';
import { TerminoPartida } from './implementacao/termino-partida';

@Module({
  providers: [{ provide: 'ITerminoPartida', useClass: TerminoPartida }],
  exports: [{ provide: 'ITerminoPartida', useClass: TerminoPartida }],
})
export class TerminoPartidaModule {}
