import { Ball } from './../model/ball';
import { Observable, Subject, Observer } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BingoService {
  

  //private ball$: Observable<Ball>;
  private bolas$: Observable<Ball>;
  //private bolas: Ball[] = [];

  allNumberBalls: number = 0;
  configTotalBolas: number = 60;
  configTotalCartelas: number = 50;
  configTotalParticipantes: number = 150;
  configGanhaComAcertoDe: number = 20;

  concurso: number = 232;
  concursoDate: string = '';
  concursoHora: string = '19:00';

  constructor(private afs: AngularFirestore) { 
    //this.ball$ = Math.round(Math.random() * 20 );
    console.log('Carregou serviço BingoService ');
  }

  

  addBall(b: Ball): Observable<Ball> {
    return new Observable<Ball>(observador => {
      setTimeout(() => {
        observador.next(b);
        
      }, 3000);
      observador.complete();
    });
    

  }


}
