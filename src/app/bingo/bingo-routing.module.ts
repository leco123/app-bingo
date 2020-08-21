import { ConfigComponent } from './config/config.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play/play.component';


const routes: Routes = [
  { path:'bingo/play',  component: PlayComponent },
  { path:'bingo/config',  component: ConfigComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BingoRoutingModule { }
