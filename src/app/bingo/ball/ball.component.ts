import { Ball } from './../../model/ball';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BingoService } from '../bingo.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  balls: Ball[];
  


  constructor(private bingoService: BingoService) {}

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
      this.bingoService.addNewBall(b);
      
    }

  }

 
}
