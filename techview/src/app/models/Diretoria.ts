import { Comunidade } from "./Comunidade";

export interface Diretoria {
    codDiretoria: string;
    nomeDiretoria: string;
    listaComunidades: Comunidade[];
}