import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pong-game',
  templateUrl: './pong-game.component.html',
  styleUrls: ['./pong-game.component.scss']
})
export class PongGameComponent implements OnInit {
  @Input() fieldWidth: number = 0;
  @Input() fieldHeight: number = 0;
  @Input() ballSize: number = 0;
  @Input() ballPosX: number = 0;
  @Input() ballPosY: number = 0;
  @Input() currentPos: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
