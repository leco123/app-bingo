import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TopComponent } from './template/top/top.component';
import { LeftComponent } from './template/left/left.component';
import { BottomComponent } from './template/bottom/bottom.component';
import { CenterComponent } from './template/center/center.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { ColorsDirective } from './directives/colors.directive';
import { BallComponent } from './bingo/ball/ball.component';
import { PlayComponent } from './bingo/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LeftComponent,
    BottomComponent,
    CenterComponent,
    PageHomeComponent,
    ColorsDirective,
    BallComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
