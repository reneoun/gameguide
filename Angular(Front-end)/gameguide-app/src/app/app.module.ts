import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddgameComponent } from './pages/addgame/addgame.component';
import { GamepageComponent } from './pages/gamepage/gamepage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GameCardComponent,
    AddgameComponent,
    GamepageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
