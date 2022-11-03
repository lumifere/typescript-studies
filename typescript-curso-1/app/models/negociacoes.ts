import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];   // Pode ser também Array<Negociacao>

  adiciona(negociacao: Negociacao): void{
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {    // Pode ser também ReadonlyArray<Negociacao>
    return this.negociacoes;
  }
};