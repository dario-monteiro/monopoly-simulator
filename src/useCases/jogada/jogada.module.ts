import { Module } from '@nestjs/common';
import { AluguelModule } from '../aluguel/aluguel.module';
import { Aluguel } from '../aluguel/implementacao/aluguel';
import { ComportamentoDeCompraModule } from '../comportamentoDeCompra/comportamento-de-compra.module';
import { ComportamentoDeCompra } from '../comportamentoDeCompra/implementacao/comportamento-de-compra';
import { CompraModule } from '../compra/compra.module';
import { Compra } from '../compra/implementacao/compra';
import { SorteioDado } from '../sorteioDado/implementacao/sorteio-dado';
import { SorteioDadoModule } from '../sorteioDado/sorteio-dado.module';
import { Jogada } from './implementacao/jogada';

@Module({
  imports: [
    ComportamentoDeCompraModule,
    CompraModule,
    AluguelModule,
    SorteioDadoModule,
  ],
  providers: [
    {
      provide: 'IJogada',
      useClass: Jogada,
    },
    {
      provide: 'IComportamentoDeCompra',
      useClass: ComportamentoDeCompra,
    },
    {
      provide: 'ICompra',
      useClass: Compra,
    },
    {
      provide: 'IAluguel',
      useClass: Aluguel,
    },
    {
      provide: 'ISorteioDado',
      useClass: SorteioDado,
    },
  ],
  exports: [
    {
      provide: 'IJogada',
      useClass: Jogada,
    },
    {
      provide: 'IComportamentoDeCompra',
      useClass: ComportamentoDeCompra,
    },
    {
      provide: 'ICompra',
      useClass: Compra,
    },
    {
      provide: 'IAluguel',
      useClass: Aluguel,
    },
    {
      provide: 'ISorteioDado',
      useClass: SorteioDado,
    },
  ],
})
export class JogadaModule {}
