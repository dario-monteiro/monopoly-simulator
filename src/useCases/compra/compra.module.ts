import { Module } from '@nestjs/common';
import { Compra } from './implementacao/compra';

@Module({
  providers: [
    {
      provide: 'ICompra',
      useClass: Compra,
    },
  ],
  exports: [
    {
      provide: 'ICompra',
      useClass: Compra,
    },
  ],
})
export class CompraModule {}
