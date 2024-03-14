import { Indicador } from "./Indicador";

export interface SubItem {
    indicadorName: any;
    subItemId: number;
    subItemNome: string;
    priorizado: boolean;
    listaIndicadores: Indicador[];
}