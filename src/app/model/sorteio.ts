import { Cartela } from './cartela';

export interface Sorteio {
    concurso: number;
    card: Cartela;
    rightballs: number; //bolas certas
    awarddescription: string;
}
