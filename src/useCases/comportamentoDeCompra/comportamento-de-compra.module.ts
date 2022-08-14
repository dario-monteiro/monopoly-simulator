import { Module } from '@nestjs/common';
import { ComportamentoDeCompraAleatorio } from './implementacao/comportamento-de-compra-aleatorio';
import { ComportamentoDeCompraCauteloso } from './implementacao/comportamento-de-compra-cauteloso';
import { ComportamentoDeCompraExigente } from './implementacao/comportamento-de-compra-exigente';
import { ComportamentoDeCompraImpulsivo } from './implementacao/comportamento-de-compra-impulsivo';

@Module({
  providers: [
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
export class ComportamentoDeCompraModule {}
