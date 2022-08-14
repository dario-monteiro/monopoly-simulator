import { Module } from '@nestjs/common';
import { Aluguel } from './implementacao/aluguel';

@Module({
  providers: [{ provide: 'IAluguel', useClass: Aluguel }],
  exports: [{ provide: 'IAluguel', useClass: Aluguel }],
})
export class AluguelModule {}
