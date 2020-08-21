import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    BingoRoutingModule,
    MaterialModule,
  ]
})
export class BingoModule { }
