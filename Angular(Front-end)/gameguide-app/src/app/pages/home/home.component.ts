import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Game } from '../../models/Game';
import * as M from "materialize-css/dist/js/materialize";
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  games: Game[] = [];

  constructor(private _http: HttpService) { }

  
  ngOnInit(): void {
    this.getAllGames()
    M.AutoInit();
    $(document).ready(function(){
      $('.fixed-action-btn').floatingActionButton();
    });
  }

  public getAllGames(){
    this._http.getAllGames().subscribe(res => {
      this.games = res;
      console.log(this.games);
    },
    err =>{
      alert("There is an error!")
    });
  }

}
