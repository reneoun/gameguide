import { Component, OnInit } from '@angular/core';
import * as M from 'node_modules/materialize-css';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.scss']
})
export class AddgameComponent implements OnInit {

  model:AddGameViewModel = {
    title: '',
    shortDesc: '',
    require: '',
    players: null, //wat moet ik hier invullen voor 'null'?
    duration: ''
  }

  steps: number = 0;
  selectedFile: File = null;


  constructor(private http: HttpService) { }

  public addGame() {
    this.http.uploadGame(this.model)
    .subscribe(
      res => {console.log(res);},
      err =>{alert("There is a Form error!")}
    );
    this.http.uploadImage(this.selectedFile)
    .subscribe(
      res => {console.log(res);},
      err =>{alert("There is an Image error!")}
    );
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  addStep() {
    this.steps += 1;
  }

  removeStep() {
    if(this.steps > 0) {
      this.steps -= 1;
    }
  }


  ngOnInit(): void {
    M.AutoInit();

    window.onload = function() {

      var elems  = document.querySelectorAll("input[type=range]");
      M.Range.init(elems);

      var elems = document.querySelectorAll('.chips');
      var instances = M.Chips.init(elems, {
          placeholder: "Example Dice",
          secondaryPlaceholder: "+object",
          Limit: 10,
      });
    };

  }

}

export interface AddGameViewModel {
  title:string;
  shortDesc:string;
  require: string;
  players: number;
  duration: string;
}

/**
 * title
 * image-bestand
 * desc
 * -------
 * players
 * time
 * steps
*/