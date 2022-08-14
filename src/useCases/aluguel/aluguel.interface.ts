import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IAluguel {
  pagarAluguel(
    jogador: Jogador,
    propriedade: Propriedade,
  ): [Jogador, Propriedade];
}
