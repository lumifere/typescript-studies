export class Negociacoes {
    constructor(negociacao) {
        this.negociacoes = [];
        this.negociacoes.push(negociacao);
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
}
