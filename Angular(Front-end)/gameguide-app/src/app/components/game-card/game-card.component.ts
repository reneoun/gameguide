import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  constructor() { }

  @Input() id: number;
  @Input() title: String;
  @Input() shortDes: String;
  @Input() image_url:String;
  

  ngOnInit(): void {
  }

}
