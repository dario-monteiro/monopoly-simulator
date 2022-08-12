import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';

export interface IAluguel {
  alugar(jogador: Jogador, propriedade: Propriedade): void;
}
