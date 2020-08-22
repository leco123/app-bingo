import { AuthService } from './auth/auth.service';
import { environment } from './../environments/environment';
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
import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BingoRoutingModule } from './bingo/bingo-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { BingoModule } from './bingo/bingo.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BingoService } from './bingo/bingo.service';
import { ReactiveFormsModule } from '@angular/forms';

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
    PlayComponent,
    PagnotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AuthModule, 
    BingoModule,
    BingoRoutingModule,
    AuthRoutingModule,
    AppRoutingModule,
  ],
  providers: [AuthService, BingoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
