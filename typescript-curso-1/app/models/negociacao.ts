export class Negociacao {
  constructor(
    public _data: Date, 
    public readonly _quantidade: number, 
    public readonly _valor: number
  ) {}

  // Necessário para que o data não seja modificado via .setTime()
  get data(): Date {
    const data = new Date(this._data.getTime())
    return data
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
};