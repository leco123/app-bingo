import { distinct,  distinctUntilKeyChanged, tap } from 'rxjs/operators';
import { Ball } from './../../model/ball';
import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { Observable, Subscription, observable, Observer } from 'rxjs';
import { BingoService } from '../bingo.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  subscription: Subscription;

  public balls: Ball[] = [];
  inscricaoObservable: Subscription;
  observable: Observable<Ball>;
  pedras: Ball[] = [];

  constructor(private bingoService: BingoService) {
    
    this.subscription = bingoService.pendente$.pipe(
      distinct(),
    ).subscribe(
    bola => {
      this.balls.push(bola);
      this.showAudio(bola);
    },
    (err) => {
      console.log('ERRO: Não foi possível continuar...');
    },
    () => {
      console.log('Fim do processo...');
      this.bingoService.atualizarNumBall(this.balls.length);
    }
    
    );

  }

  ngOnInit() {

  }

  showAudio(ball: Ball) {
    //responsiveVoice.speak(ball.cantarpedra.toString(), 'Brazilian Portuguese Female', {volume: 100});
  }

/*
  pauseCantarPedra() {
    responsiveVoice.pause();
    responsiveVoice.speak('Pessoal Atenção,    Por favor pessoal pesso a Atenção de todos,     vamos fazer uma parada.    Aproveitem para comprarem suas pipócas, refrigerantes e não pode faltar a cerveja. Voltaremos em alguns Minutos ', 'Brazilian Portuguese Female', {volume: 100});
    responsiveVoice.resume();
  }

  continuarCantarPedra() {
    responsiveVoice.resume();
  }

  cancelaPlayer () {
    responsiveVoice.cancel();
    responsiveVoice.speak('Atenção, Atenção,     esta rodada está cancelada.      agradeço pela coompreensão de todos, Obrigada!', 'Brazilian Portuguese Female', {volume: 100});
    responsiveVoice.speak('Atenção', 'Brazilian Portuguese Female', {volume: 100});
    responsiveVoice.speak('esta rodada está cancelada.', 'Brazilian Portuguese Female', {volume: 100});
    responsiveVoice.speak('agradeço pela coompreensão de todos, Obrigada!', 'Brazilian Portuguese Female', {volume: 100});
    responsiveVoice.cancel();
  }
*/

  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
 
}
