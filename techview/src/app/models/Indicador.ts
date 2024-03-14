import { ValorMensal } from "./ValorMensal";
import { ValorTrimestral } from "./ValorTrimestral";

export interface Indicador {
    indicadorId: number;
    indicadorNome: string;
    risco: number;
    maiorMenor: string;
    taxa: number;
    valoresMensais: ValorMensal[];
    valoresTrimestrais: ValorTrimestral[];
}