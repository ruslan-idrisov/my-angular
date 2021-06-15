import { createAction, props } from "@ngrx/store";

export const addFieldSizes = createAction(
  '[Pong] Add Field Sizes',
  props<{ width: number, height: number }>()
);

export const addBallPositions = createAction(
  '[Pong] Add Ball Positions',
  props<{ ballPos_X: number, ballPos_Y: number }>()
);

export const reverseBallXSpeed = createAction('[Pong] Reverse Ball X Speed');
export const reverseBallYSpeed = createAction('[Pong] Reverse Ball Y Speed');

// export const addActionRange = createAction(
//   '[Test] Set Range',
//   props<{ range: number }>()
// );

// export const getData = createAction('[Test] Get Data');
// export const getDataFail = createAction('[Test] Get Data Fail');
// export const getDataSuccess = createAction(
//   '[Test] Get Data Success',
//   props<{ data: any }>()
// );