import { Action, createReducer, on } from "@ngrx/store";

// import { addActionRange, addActionText, getData, getDataFail, getDataSuccess } from "./test.actions";

export interface Game {
  pause: boolean;
  blueGoals: number;
  redGoals: number;
  goalOut: boolean;
}

export interface Field {
  width: number,
  height: number
}

export interface Utk {
  utkSize: number;
  utkPos_X: number;
  utkPos_Y: number;
  utkSpeed_X: number;
  utkSpeed_Y: number;
}

export interface Walls {
  width: number;
  height: number;
  speed: number;
  wallBotPos: number;
  wallTopPos: number;
}

export interface JumperState {
  game: Game;
  field: Field;
  utk:  Utk;
}

const initialState: JumperState = {
  game: {
    pause: false,
    blueGoals: 0,
    redGoals: 0,
    goalOut: false
  },
  field: {
    width: 0,
    height: 0
  },
  utk: {
    utkSize: 30,
    utkPos_X: 200,
    utkPos_Y: 0,
    utkSpeed_X: 2,
    utkSpeed_Y: 2,
  }
}

const utkReducer = createReducer(
  initialState,
  // on(addFieldSizes, (state, { width, height }) => ({
  //   ...state,
  //   field: {width, height}
  // })),
);
 
export function reducer(state: JumperState | undefined, action: Action) {
  return utkReducer(state, action);
}