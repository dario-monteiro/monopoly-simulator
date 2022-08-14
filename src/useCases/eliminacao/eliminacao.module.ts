import { Module } from '@nestjs/common';
import { Eliminacao } from './implementacao/eliminacao';

@Module({
  providers: [
    {
      provide: 'IEliminacao',
      useClass: Eliminacao,
    },
  ],
  exports: [
    {
      provide: 'IEliminacao',
      useClass: Eliminacao,
    },
  ],
})
export class EliminacaoModule {}
