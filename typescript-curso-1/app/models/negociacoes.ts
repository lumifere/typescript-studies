import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  constructor(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  adiciona(negociacao: Negociacao): void{
    this.negociacoes.push(negociacao);
  }
}