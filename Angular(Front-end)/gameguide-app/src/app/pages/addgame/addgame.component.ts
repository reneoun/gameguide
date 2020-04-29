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

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();

    window.onload = function() {
      var elems  = document.querySelectorAll("input[type=range]");
      M.Range.init(elems);

    };

    
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