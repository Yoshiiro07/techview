import { Item } from "./Item";

export interface Estrutura {
    estruturaId: string;
    estruturaNome: string;
    codigoTipo: number;
    listaItens: Item[];
}