import { Component, OnInit } from '@angular/core';
import * as M from 'node_modules/materialize-css';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import * as $ from 'node_modules/jquery';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.scss']
})
export class AddgameComponent implements OnInit {

  steps: number = 0;

  constructor() { }

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
    };

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.chips');
      var instances = M.Chips.init(elems, {
          placeholder: "Example Dice",
          secondaryPlaceholder: "+object",
          Limit: 10,
      });
    });

  }

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