import { BingoService } from './../bingo.service';
import { Observable, fromEvent } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Ball } from 'src/app/model/ball';
import { Data } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  allNumberBalls: number = 0;
  configTotalBolas: number = 60;
  configTotalCartelas: number = 50;
  configTotalParticipantes: number = 150;
  configGanhaComAcertoDe: number = 20;

  concurso: number = 232;
  concursoDate: string = '';
  concursoHora: string = '19:00';
  constructor(private bingoService: BingoService) { }

  ngOnInit() {
    let dt = new Date();
    this.concursoDate =  dt.getDate()+'/'+dt.getMonth()+'/'+dt.getFullYear()+''.toString();
    this.allNumberBalls = this.bingoService.getAllBalls();
  }


}
