import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PlayComponent } from './bingo/play/play.component';


const routes: Routes = [
  { path:'', component: PageHomeComponent },
  { path:'bingo/play',  component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
