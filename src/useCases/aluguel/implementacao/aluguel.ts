import { Injectable, Logger } from '@nestjs/common';
import { Jogador } from 'src/models/jogador';
import { Propriedade } from 'src/models/propriedade';
import { IAluguel } from '../aluguel.interface';

@Injectable()
export class Aluguel implements IAluguel {
  private readonly logger = new Logger(Aluguel.name);

  pagarAluguel(
    jogador: Jogador,
    propriedade: Propriedade,
  ): [Jogador, Propriedade] {
    jogador.saldo -= propriedade.valorDeAluguel;
    propriedade.proprietario.saldo += propriedade.valorDeAluguel;

    this.logger.log(
      `O Jogador ${jogador.comportamento.getTipoDeComportamento()} pagou aluguel de ${
        propriedade.valorDeAluguel
      } da propriedade ${
        propriedade.nome
      } ao proprietário ${propriedade.proprietario.comportamento.getTipoDeComportamento()}`,
    );
    return [jogador, propriedade];
  }
}
