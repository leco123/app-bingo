import { Config } from 'protractor';
import { Ball } from './../model/ball';
import { Observable, Subject, Observer, Subscription, interval } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { clearInterval, setInterval } from 'timers';


@Injectable({
  providedIn: 'root'
})
export class BingoService {

  private userCollection: AngularFirestoreCollection<Config> = this.afs.collection('config');
  
  private pendenteSource = new Subject<Ball>();
  // Observable string streams
  pendente$ = this.pendenteSource.asObservable();

  private allNumberBalls: number = 0;
  configTotalBolas: number = 60;
  configTotalCartelas: number = 50;
  configTotalParticipantes: number = 150;
  configGanhaComAcertoDe: number = 20;

  concurso: number = 232;
  concursoDate: string = '';
  concursoHora: string = '19:00';

  

  ditados = [
    {num: 1, texto: '1, começou o jogo, pedra número 1.'},
    {num: 2, texto: '2, só um patinho na lagoa, pedra número 2.'},
    {num: 3, texto: '3, porquinhos ou mosqueteiros, pedra número 3.'},
    {num: 4, texto: '4, pernas da mesa, pedra número 4.'},
    {num: 5, texto: '5, aperte o cinto, pedra número 5.'},
    {num: 6, texto: '6, Meia dúzia, pedra número 6.'},
    {num: 7, texto: '7 anões da Branca de Neve, pedra número 7.'},
    {num: 8, texto: '8, biscoito, pedra número 8.'},
    {num: 9, texto: '9, pingo no pé, pedra número 9.'},
    {num: 10, texto: '10, aaaiiii eu sou o cai cai neymarr, pedra número 10.'},
    {num: 11, texto: '11, um atrás do outro, pedra número 11.'},
    {num: 12, texto: '12, vitamina B12, ou conhecida como uma duzia, pedra número 12.'},
    {num: 13, texto: '13, número de sorte - Zagallo, pedra número 13.'},
    {num: 14, texto: '14, Dona Florinda, pedra número 14.'},
    {num: 15, texto: '15, debutante, pedra número 15.'},
    {num: 16, texto: '16, pedra número 16.'},
    {num: 17, texto: '17, pedra número 17.'},
    {num: 18, texto: '18, Idade adulta, pedra número 18.'},
    {num: 19, texto: '19, pedra número 19.'},
    {num: 20, texto: '20, pedra número 20.'},
    {num: 21, texto: '21, pedra número 21.'},
    {num: 22, texto: '22, Dois patinhos na lagoa, pedra número 22.'},
    {num: 23, texto: '23, Mais um número e chega lá, pedra número 23.'},
    {num: 24, texto: '24, pedra número 24.'},
    {num: 25, texto: '25, pedra número 25.'},
    {num: 26, texto: '26, pedra número 26.'},
    {num: 27, texto: '27, pedra número 27.'},
    {num: 28, texto: '28, pedra número 28.'},
    {num: 29, texto: '29, pedra número 29.'},
    {num: 30, texto: '30, não minta, saiu 30, pedra número 30.'},
    {num: 31, texto: '31, pedra número 31.'},
    {num: 32, texto: '29, pedra número 32.'},
    {num: 33, texto: '33, idade de Cristo, pedra número 33.'},
    {num: 34, texto: '34, pedra número 34.'},
    {num: 35, texto: '35, pedra número 35.'},
    {num: 36, texto: '36, pedra número 36.'},
    {num: 37, texto: '37, pedra número 37.'},
    {num: 38, texto: '38, Esse é perigoso, pedra número 38.'},
    {num: 39, texto: '39, pedra número 39.'},
    {num: 40, texto: '40, a idade da loba ou  conhecida como panelão sem fundo, pedra número 40.'},
    {num: 41, texto: '41, pedra número 41.'},
    {num: 42, texto: '42, pedra número 42.'},
    {num: 43, texto: '43, pedra número 43.'},
    {num: 44, texto: '44, Quá-quá-quá ou Bico Largo, pedra número 44.'},
    {num: 45, texto: '45, fim do primeiro tempo, pedra número 45.'},
    {num: 46, texto: '46, pedra número 46.'},
    {num: 47, texto: '47, pedra número 47.'},
    {num: 48, texto: '48, pedra número 48.'},
    {num: 49, texto: '49, pedra número 49.'},
    {num: 50, texto: '50, é penta, pedra número 50.'},
    {num: 51, texto: '51, Conhecida como a melhor pinga, ou uma boa ideia, pedra número 51.'},
    {num: 52, texto: '52, pedra número 52.'},
    {num: 53, texto: '53, pedra número 53.'},
    {num: 54, texto: '54, pedra número 54.'},
    {num: 55, texto: '55, Dois portugueses numa perna só ou dois cachorros do padre , pedra número 55.'},
    {num: 56, texto: '56, pedra número 56.'},
    {num: 57, texto: '57, pedra número 57.'},
    {num: 58, texto: '58, primeira copa, pedra número 58.'},
    {num: 59, texto: '59, pedra número 59.'},
    {num: 60, texto: '60, num bar, 70 sair 100 pagar, aí mandão a polícia 20 buscar. pedra número 60.'},
    {num: 61, texto: '61, pedra número 61.'},
    {num: 62, texto: 'meia dois, Feijão com arroz, pedra número 62.'},
    {num: 63, texto: '63, pedra número 63.'},
    {num: 64, texto: '64, pedra número 64.'},
    {num: 65, texto: '65, pedra número 65.'},
    {num: 66, texto: 'meia, meia, um tapa atras da orelha, pedra número 66.'},
    {num: 67, texto: '67, pedra número 67.'},
    {num: 68, texto: '68, pedra número 68.'},
    {num: 69, texto: 'meia nove, Quem não gosta, um pra cima e outro para baixo, pedra número 69.'},
    {num: 70, texto: '70, tri-mundial, pedra número 70.'},
    {num: 71, texto: '71, Dona Clotilde, pedra número 71.'},
    {num: 72, texto: '72, Seu Madruga, pedra número 72.'},
    {num: 73, texto: '73, pedra número 73.'},
    {num: 74, texto: '74, pedra número 74.'},
    {num: 75, texto: '75, terminou o jogo, pedra número 75.'}
  ];

  constructor(private afs: AngularFirestore) { 
    //this.ball$ = Math.round(Math.random() * 20 );
    console.log('Carregou serviço BingoService ');
  }

  atualizarNumBall(n: number) {
    this.allNumberBalls = n; 
  }

  getallNumberBalls():number {
    return this.allNumberBalls;
  }

  addBalls(ball: Ball) {
    const val = this.ditados.find(d => d.num == ball.numero);

    ball.cantarpedra = val.texto.toString(); 
      this.pendenteSource.next(ball);
  }
}
