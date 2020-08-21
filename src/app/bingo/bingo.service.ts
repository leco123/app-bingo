import { Ball } from './../model/ball';
import { Observable } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BingoModule } from './bingo.module';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  private ball$: Observable<Ball>;
  private bolas: Ball[] = [];

  constructor() { 
    //this.ball$ = Math.round(Math.random() * 20 );
    console.log('Carregou serviço BingoService ');
  }

  getBall(): Ball[] {
    return this.bolas;
  }

  addNewBall(ball: Ball) {
/*
    this.ball$ = new Observable<Ball>((observer) => {

      setInterval(() => {
        console.log('add new ball');
        console.log(ball);
        observer.next(ball);
      }, 3000)

      observer.complete();
      console.log('observer complente...');

    });
  }
  */
    this.bolas.push(ball);
  }

  getAllBalls() {
    return this.bolas.length;
  }

}
