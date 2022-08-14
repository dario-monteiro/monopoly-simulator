import { Injectable } from '@nestjs/common';
import { ISorteioDado } from '../sorteio-dado.interface';

@Injectable()
export class SorteioDado implements ISorteioDado {
  lancar(): number {
    return Math.floor(Math.random() * (7 - 1)) + 1;
  }
}
