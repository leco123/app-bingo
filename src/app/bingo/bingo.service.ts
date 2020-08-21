import { Ball } from './../model/ball';
import { Observable, Observer } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BingoModule } from './bingo.module';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  //private ball$: Observable<Ball>;
  bolas: Observable<Ball[]>;
  //private bolas: Ball[] = [];

  allNumberBalls: number = 0;
  configTotalBolas: number = 60;
  configTotalCartelas: number = 50;
  configTotalParticipantes: number = 150;
  configGanhaComAcertoDe: number = 20;

  concurso: number = 232;
  concursoDate: string = '';
  concursoHora: string = '19:00';

  constructor() { 
    //this.ball$ = Math.round(Math.random() * 20 );
    console.log('Carregou serviço BingoService ');
  }

  getBall(): Observable<Ball[]> {
    return this.bolas;
  }

  addNewBall(ball: Ball) {
/*
    let o: Observable<Ball>((observer: Observer<Ball[]>) => {

      setInterval(() => {
        console.log('add new ball');
        console.log(ball);
        observer.next(ball[0]);
      }, 3000)

      observer.complete();
      console.log('observer complente...');

    });
*/
    //this.bolas.push(ball);

  }
  
  getAllBalls() {
    return 10;
  }

}
