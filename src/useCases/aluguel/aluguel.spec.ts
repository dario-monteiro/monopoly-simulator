import { Test, TestingModule } from '@nestjs/testing';
import { Jogador } from '../../models/jogador';
import { Propriedade } from '../../models/propriedade';
import { IComportamentoDeCompra } from '../comportamentoDeCompra/comportamento-de-compra.interface';
import { ComportamentoDeCompraExigente } from '../comportamentoDeCompra/implementacao/comportamento-de-compra-exigente';
import { ComportamentoDeCompraImpulsivo } from '../comportamentoDeCompra/implementacao/comportamento-de-compra-impulsivo';
import { IAluguel } from './aluguel.interface';
import { Aluguel } from './implementacao/aluguel';

describe('Aluguel', () => {
  let aluguel: IAluguel;
  let comportamentoImpulsivo: IComportamentoDeCompra;
  let comportamentoExigente: IComportamentoDeCompra;
  let jogadorImpulsivo: Jogador;
  let jogadorExigente: Jogador;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Aluguel,
        ComportamentoDeCompraImpulsivo,
        ComportamentoDeCompraExigente,
      ],
    }).compile();

    aluguel = module.get<IAluguel>(Aluguel);
    comportamentoImpulsivo = module.get<IComportamentoDeCompra>(
      ComportamentoDeCompraImpulsivo,
    );
    comportamentoExigente = module.get<IComportamentoDeCompra>(
      ComportamentoDeCompraExigente,
    );
  });

  beforeEach(() => {
    jogadorImpulsivo = new Jogador(
      1,
      300,
      comportamentoImpulsivo.getComportamento(),
    );
    jogadorExigente = new Jogador(
      2,
      300,
      comportamentoExigente.getComportamento(),
    );
  });

  it('should be defined', () => {
    expect(aluguel).toBeDefined();
  });

  describe('pagarAluguel', () => {
    it('should call method with expected params', () => {
      const spy = jest.spyOn(aluguel, 'pagarAluguel');

      let propriedade: Propriedade = new Propriedade(1, 'Itajuba', 200, 40);
      propriedade.proprietario = jogadorExigente;

      [jogadorImpulsivo, propriedade] = aluguel.pagarAluguel(
        jogadorImpulsivo,
        propriedade,
      );
      expect(spy).toHaveBeenCalledWith(jogadorImpulsivo, propriedade);
    });

    it('should debit jogador balance and increase proprietario balance', () => {
      let propriedade: Propriedade = new Propriedade(1, 'Itajuba', 200, 40);
      propriedade.proprietario = jogadorExigente;

      const saldoJogadorAntesAluguel = jogadorImpulsivo.saldo;
      const saldoProprietarioAntesAluguel = jogadorExigente.saldo;

      [jogadorImpulsivo, propriedade] = aluguel.pagarAluguel(
        jogadorImpulsivo,
        propriedade,
      );
      expect(jogadorImpulsivo.saldo).toEqual(
        saldoJogadorAntesAluguel - propriedade.valorDeAluguel,
      );
      expect(jogadorExigente.saldo).toEqual(
        saldoProprietarioAntesAluguel + propriedade.valorDeAluguel,
      );
    });
  });
});
