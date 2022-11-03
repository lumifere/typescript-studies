import { Negociacao } from '../models/negociacao.js'
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
    this.limparForm();
  }

  criaNegociacao(): Negociacao {
    const date = new Date(this.inputData.value.replace('-', ','));
    const qntd = parseInt(this.inputQuantidade.value);
    const value = parseFloat(this.inputData.value);
    return new Negociacao(date, qntd, value);
  }

  limparForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}