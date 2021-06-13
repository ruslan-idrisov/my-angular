import { createAction, props } from "@ngrx/store";
import { Text } from "./test.reducer";

export const addActionText = createAction(
  '[Test] Add Text',
  props<{ text: Text }>()
);

export const addActionRange = createAction(
  '[Test] Set Range',
  props<{ range: number }>()
);

export const getData = createAction('[Test] Get Data');
export const getDataFail = createAction('[Test] Get Data Fail');
export const getDataSuccess = createAction(
  '[Test] Get Data Success',
  props<{ data: any }>()
);