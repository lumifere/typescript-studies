export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // Necessário para que o data não seja modificado via .setTime()
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
;
