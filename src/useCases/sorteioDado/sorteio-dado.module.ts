import { Module } from '@nestjs/common';
import { SorteioDado } from './implementacao/sorteio-dado';

@Module({
  providers: [{ provide: 'ISorteioDado', useClass: SorteioDado }],
  exports: [{ provide: 'ISorteioDado', useClass: SorteioDado }],
})
export class SorteioDadoModule {}
