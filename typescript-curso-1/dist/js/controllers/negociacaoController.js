import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController {
    // Pegando valores dos inputs de HTML
    constructor() {
        this.negociacoes = new Negociacoes; // Criando a lista de negociações
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        const negociacoes = this.negociacoes.lista();
        console.log(negociacoes);
        this.limparForm();
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace('-', ','));
        const qntd = parseInt(this.inputQuantidade.value);
        const value = parseFloat(this.inputData.value);
        return new Negociacao(date, qntd, value);
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
