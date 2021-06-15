import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBallPositions, addFieldSizes, reverseBallXSpeed, reverseBallYSpeed } from '../../store/pong.actions';
import { Ball, Field, PongState } from '../../store/pong.reducer';
import { AppWithPongState, selectBall, selectFieldSizes, selectStore } from '../../store/pong.selectors';

@Component({
  selector: 'app-pong-game-wrapper',
  templateUrl: './pong-game-wrapper.component.html',
  styleUrls: ['./pong-game-wrapper.component.scss']
})
export class PongGameWrapperComponent implements OnInit {
  fieldSizes$: Observable<Field> = this.store$.pipe(select(selectFieldSizes));
  ball$: Observable<Ball> = this.store$.pipe(select(selectBall));
  store2$: Observable<PongState> = this.store$.pipe(select(selectStore));

  ballSize: number = 0;
  ballPosX: number = 0;
  ballPosY: number = 0;
  ballSpeedX: number = 0;
  ballSpeedY: number = 0;
  wallWidth: number = 0;
  wallHeight: number = 0;

  currentPos: string = `translate(0px, 0px)`;

  constructor(
    private store$: Store<AppWithPongState>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(addFieldSizes({width: 600, height: 400}));

    this.ball$.subscribe(x => {
      this.ballPosX = x.ballPos_X;
      this.ballPosY = x.ballPos_Y;
      this.ballSpeedX = x.ballSpeed_X;
      this.ballSpeedY = x.ballSpeed_Y;
      this.ballSize = x.ballSize;

      this.currentPos = `translate(${this.ballPosX}px, ${this.ballPosY}px)`;
    });
    this.fieldSizes$.subscribe(x => {
      console.log(x, 'fieldSizes$')
      this.wallWidth = x.width;
      this.wallHeight = x.height;
    });
    this.store2$.subscribe(x => {
      // console.log(x, 'store2$')
    });

    this.animation();
  }

  animation() {
    requestAnimationFrame(() => {
      this.changePosition();
      this.animation();
    })
  }

  changePosition(): void {
    this.ballPosX += this.ballSpeedX;
    this.ballPosY += this.ballSpeedY;

    this.collisionСhecks();

    this.store$.dispatch(addBallPositions({ballPos_X: this.ballPosX, ballPos_Y: this.ballPosY}))
    this.cdr.detectChanges();
  }

  collisionСhecks(): void {
    if (this.ballPosX + this.ballSize > this.wallWidth) {
      this.store$.dispatch(reverseBallXSpeed());
    }
    if (this.ballPosY + this.ballSize > this.wallHeight) {
      this.store$.dispatch(reverseBallYSpeed());
    }
    if (this.ballPosX < 0) {
      this.store$.dispatch(reverseBallXSpeed());
    }
    if (this.ballPosY < 0) {
      this.store$.dispatch(reverseBallYSpeed());
    }
  }
}
