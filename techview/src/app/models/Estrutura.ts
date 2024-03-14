import { Item } from "./Item";

export interface IEstrutura {
    estruturaId: string;
    estruturaNome: string;
    codigoTipo: number;
    listaItens: Item[];
}