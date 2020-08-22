import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { ConfigComponent } from './config/config.component';
import { BingoService } from './bingo.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    BingoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
    
  ],
  providers: [BingoService]
})
export class BingoModule { }
