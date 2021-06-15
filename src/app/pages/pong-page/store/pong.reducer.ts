import { Action, createReducer, on } from "@ngrx/store";
import { addBallPositions, addFieldSizes, reverseBallXSpeed, reverseBallYSpeed } from "./pong.actions";
// import { addActionRange, addActionText, getData, getDataFail, getDataSuccess } from "./test.actions";


export interface Field {
  width: number,
  height: number
}

export interface Ball {
  ballSize: number;
  ballPos_X: number;
  ballPos_Y: number;
  ballSpeed_X: number;
  ballSpeed_Y: number;
}

export interface Walls {
  wallLeft: Wall;
  wallRight: Wall;
}

export interface Wall {
  height: number;
  width: number;
  top: number;
}

export interface PongState {
  field: Field;
  ball: Ball;
  walls: Walls;
}

const initialState: PongState = {
  field: {
    width: 0,
    height: 0
  },
  ball: {
    ballSize: 35,
    ballPos_X: 0,
    ballPos_Y: 0,
    ballSpeed_X: .3,
    ballSpeed_Y: .2,
  },
  walls: {
    wallLeft: {
      height: 0,
      width: 0,
      top: 0,
    },
    wallRight: {
      height: 0,
      width: 0,
      top: 0,
    }
  }
}

const pongReducer = createReducer(
  initialState,
  on(addFieldSizes, (state, { width, height }) => ({
    ...state,
    field: {width, height}
  })),
  on(addBallPositions, (state, { ballPos_X, ballPos_Y }) => ({
    ...state,
    ball: {...state.ball, ballPos_X, ballPos_Y}
  })),
  on(reverseBallXSpeed, state => ({
    ...state,
    ball: {
      ...state.ball, 
      ballSpeed_X: -state.ball.ballSpeed_X
    }
  })),
  on(reverseBallYSpeed, state => ({
    ...state,
    ball: {
      ...state.ball, 
      ballSpeed_Y: -state.ball.ballSpeed_Y
    }
  })),
  // on(getDataSuccess, (state, { data }) => ({
  //   ...state,
  //     text: [...state.text, ...data],
  //     loading: false
  // })),
  // on(getDataFail, state => ({
  //   ...state,
  //   loading: false
  // })),
);

export function reducer(state: PongState | undefined, action: Action) {
  return pongReducer(state, action);
}