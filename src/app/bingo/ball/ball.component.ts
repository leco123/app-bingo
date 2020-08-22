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
    // subscribe to home component messages
    this.subscription = this.bingoService.getBalls().subscribe(balls => {
      if (balls) {
        this.startBall();
      } else {
        // clear messages when empty message received
        this.balls = [];
      }
    });
  }

  ngOnInit() {
    this.startBall();
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
      this.bingoService.addBall(b);
      
    }

  }

 
}
