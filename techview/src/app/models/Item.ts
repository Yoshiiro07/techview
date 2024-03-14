import { SubItem } from "./SubItem";

export interface Item {
    itemId: number;
    itemNome: string;
    listaSubItem: SubItem[];
}