import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { ConfigComponent } from './config/config.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BingoService } from './bingo.service';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BingoRoutingModule
  ],
  providers: [BingoService]
})
export class BingoModule { }
