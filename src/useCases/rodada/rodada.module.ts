import { Module } from '@nestjs/common';
import { EliminacaoModule } from '../eliminacao/eliminacao.module';
import { Eliminacao } from '../eliminacao/implementacao/eliminacao';
import { Jogada } from '../jogada/implementacao/jogada';
import { JogadaModule } from '../jogada/jogada.module';
import { TerminoPartida } from '../terminoPartida/implementacao/termino-partida';
import { TerminoPartidaModule } from '../terminoPartida/termino-partida.module';
import { Rodada } from './implementacao/rodada';

@Module({
  imports: [JogadaModule, EliminacaoModule, TerminoPartidaModule],
  providers: [
    {
      provide: 'IRodada',
      useClass: Rodada,
    },
    {
      provide: 'IJogada',
      useClass: Jogada,
    },
    {
      provide: 'IEliminacao',
      useClass: Eliminacao,
    },
    {
      provide: 'ITerminoPartida',
      useClass: TerminoPartida,
    },
  ],
  exports: [
    {
      provide: 'IRodada',
      useClass: Rodada,
    },
    {
      provide: 'IJogada',
      useClass: Jogada,
    },
    {
      provide: 'IEliminacao',
      useClass: Eliminacao,
    },
    {
      provide: 'ITerminoPartida',
      useClass: TerminoPartida,
    },
  ],
})
export class RodadaModule {}
