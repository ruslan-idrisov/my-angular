import { Action, createReducer, on } from "@ngrx/store";
import { addActionRange, addActionText, getData, getDataFail, getDataSuccess } from "./test.actions";

export interface Text {
  id?: number;
  userId?: number;
  title: string;
  body: string;
}

export interface State {
  text: Text[] | any,
  range: number | null,
  loading: boolean,
}

const initialState: State = {
  text: [
    {
      title: 'First title',
      body: 'First message'
    }
  ],
  range: 1,
  loading: false,
}

const testReducer = createReducer(
  initialState,
  on(addActionText, (state, { text }) => ({
    ...state,
    text: [...state.text, text]
  })),
  on(addActionRange, (state, { range }) => ({
    ...state,
    range
  })),
  on(getData, state => ({
    ...state,
    loading: true
  })),
  on(getDataSuccess, (state, { data }) => ({
    ...state,
      text: [...state.text, ...data],
      loading: false
  })),
  on(getDataFail, state => ({
    ...state,
    loading: false
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return testReducer(state, action);
}