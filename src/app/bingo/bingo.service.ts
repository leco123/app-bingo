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
  private bolas$ = new Subject<any>();
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

  getBalls(): Observable<Ball[]> {
    return this.bolas$.asObservable();
  }

  addBall(b: Ball) {
    
    this.bolas$.next({b});
      
  }

}
