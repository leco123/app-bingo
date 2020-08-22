import { Ball } from './../../model/ball';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BingoService } from '../bingo.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  balls: Ball[];
  subscription: Subscription;


  constructor(private bingoService: BingoService) {
    //this.startBall();
  }

  ngOnInit() {

    
    
   // this.balls = this.bingoService.getBall(); 
  }

  startBall() {

    for (let i = 0; i <= 2; i++) {

      let b: Ball = {
        numero: Math.round(Math.random() * 60 ),
        cantarpedra: 'Cantar da Pedra',
        classcss: 'blue'
      };
      console.log(i);

      const observable = this.bingoService.addBall(b);
      
      this.subscription = observable.subscribe(
        valor => {
          console.log("====> valor");
          this.balls.push(valor);
        },
        erro => {
          console.log("====> error");
          this.balls.push(erro);
        },
        () => {
          console.log("O observable foi encerrado!");
          //this.balls.push("O observable foi encerrado!");
        });
      
    }

  }

  submit(){

  }
  

 
}
