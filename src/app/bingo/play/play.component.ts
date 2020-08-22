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

  allNumberBalls: number;
  configTotalBolas: number;
  configTotalCartelas: number;
  configTotalParticipantes: number;
  configGanhaComAcertoDe: number;

  concurso: number;
  concursoDate: string;
  concursoHora: string;
  constructor(private bingoService: BingoService) { }

  ngOnInit() {
    
    let dt = new Date();
    this.allNumberBalls = this.bingoService.getallNumberBalls();
    this.configTotalBolas = this.bingoService.configTotalBolas;
    this.configTotalCartelas = this.bingoService.configTotalCartelas;
    this.configTotalParticipantes = this.bingoService.configTotalParticipantes;
    this.configGanhaComAcertoDe = this.bingoService.configGanhaComAcertoDe;
    this.concurso = this.bingoService.concurso;
    this.concursoDate =  dt.getDate()+'/'+dt.getMonth()+'/'+dt.getFullYear()+''.toString();
    this.concursoDate = this.bingoService.concursoDate;
    this.concursoHora = this.bingoService.concursoHora;

  }


}
