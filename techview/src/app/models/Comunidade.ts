import { ReleaseTrain } from './ReleaseTrain';

export interface Comunidade {
    codComunidade: string;
    nomeComunidade: string;
    listaRTs: ReleaseTrain[];
}