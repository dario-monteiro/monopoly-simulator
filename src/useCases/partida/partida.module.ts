import { Module } from '@nestjs/common';
import { ComecoPartida } from '../comecoPartida/implementacao/comeco-partida';
import { ComportamentoDeCompraModule } from '../comportamentoDeCompra/comportamento-de-compra.module';
import { CompraModule } from '../compra/compra.module';
import { Rodada } from '../rodada/implementacao/rodada';
import { RodadaModule } from '../rodada/rodada.module';
import { SorteioDadoModule } from '../sorteioDado/sorteio-dado.module';
import { TerminoPartida } from '../terminoPartida/implementacao/termino-partida';
import { Partida } from './implementacao/partida';

@Module({
  imports: [
    RodadaModule,
    SorteioDadoModule,
    ComportamentoDeCompraModule,
    CompraModule,
  ],
  providers: [
    {
      provide: 'IPartida',
      useClass: Partida,
    },
    {
      provide: 'IRodada',
      useClass: Rodada,
    },
    {
      provide: 'IComecoPartida',
      useClass: ComecoPartida,
    },
    {
      provide: 'ITerminoPartida',
      useClass: TerminoPartida,
    },
  ],
  exports: [
    {
      provide: 'IPartida',
      useClass: Partida,
    },
    {
      provide: 'IRodada',
      useClass: Rodada,
    },
    {
      provide: 'IComecoPartida',
      useClass: ComecoPartida,
    },
    {
      provide: 'ITerminoPartida',
      useClass: TerminoPartida,
    },
  ],
})
export class PartidaModule {}
