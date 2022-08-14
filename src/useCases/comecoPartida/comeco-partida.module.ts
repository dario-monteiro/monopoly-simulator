import { Module } from '@nestjs/common';
import { ComportamentoDeCompraModule } from '../comportamentoDeCompra/comportamento-de-compra.module';
import { ComportamentoDeCompraAleatorio } from '../comportamentoDeCompra/implementacao/comportamento-de-compra-aleatorio';
import { ComportamentoDeCompraCauteloso } from '../comportamentoDeCompra/implementacao/comportamento-de-compra-cauteloso';
import { ComportamentoDeCompraExigente } from '../comportamentoDeCompra/implementacao/comportamento-de-compra-exigente';
import { ComportamentoDeCompraImpulsivo } from '../comportamentoDeCompra/implementacao/comportamento-de-compra-impulsivo';
import { SorteioDado } from '../sorteioDado/implementacao/sorteio-dado';
import { SorteioDadoModule } from '../sorteioDado/sorteio-dado.module';
import { ComecoPartida } from './implementacao/comeco-partida';

@Module({
  imports: [SorteioDadoModule, ComportamentoDeCompraModule],
  providers: [
    { provide: 'IComecoPartida', useClass: ComecoPartida },
    { provide: 'ISorteioDado', useClass: SorteioDado },
    {
      provide: 'ComportamentoDeCompraImpulsivo',
      useClass: ComportamentoDeCompraImpulsivo,
    },
    {
      provide: 'ComportamentoDeCompraExigente',
      useClass: ComportamentoDeCompraExigente,
    },
    {
      provide: 'ComportamentoDeCompraCauteloso',
      useClass: ComportamentoDeCompraCauteloso,
    },
    {
      provide: 'ComportamentoDeCompraAleatorio',
      useClass: ComportamentoDeCompraAleatorio,
    },
  ],
  exports: [
    { provide: 'IComecoPartida', useClass: ComecoPartida },
    { provide: 'ISorteioDado', useClass: SorteioDado },
    {
      provide: 'ComportamentoDeCompraImpulsivo',
      useClass: ComportamentoDeCompraImpulsivo,
    },
    {
      provide: 'ComportamentoDeCompraExigente',
      useClass: ComportamentoDeCompraExigente,
    },
    {
      provide: 'ComportamentoDeCompraCauteloso',
      useClass: ComportamentoDeCompraCauteloso,
    },
    {
      provide: 'ComportamentoDeCompraAleatorio',
      useClass: ComportamentoDeCompraAleatorio,
    },
  ],
})
export class ComecoPartidaModule {}
