import { Component, OnInit } from '@angular/core';
import * as M from 'node_modules/materialize-css';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import * as $ from 'node_modules/jquery';
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
    img: ''
  }

  steps: number = 0;
  selectedFile: File = null;


  constructor(private http: HttpService) { }

  public addGame() {
    this.http.uploadImage(this.selectedFile).subscribe((response) => {
      if (response.status === 200) {
        console.log('Image upload succesfully!');
      } else {
        console.log('Image upload failed!');
      } 
    });
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
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
  img:string;
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