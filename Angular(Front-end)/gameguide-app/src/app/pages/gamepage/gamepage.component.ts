import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss']
})
export class GamepageComponent implements OnInit {

  game: any;

  constructor(private _http:HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getGame(Number(this.route.snapshot.paramMap.get('id')));
  }

  public getGame(id:number){
    this._http.getGamebyID(id).subscribe(
      res => {
        this.game = res;
        console.log(this.game);
      },
      err => {
        alert("There was an error!");
      }
    );
  }

}
