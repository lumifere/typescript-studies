export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Pode ser também Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
;
