import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./test.reducer";

export const storeFeatureKey = 'test';

export interface AppWithState extends State {
  [storeFeatureKey]: State;
}

export const selectFeature = createFeatureSelector<AppWithState, State>(storeFeatureKey);

export const selectStoreLoading = createSelector(
  selectFeature,
  state => state.loading
);

export const selectStoreText = createSelector(
  selectFeature,
  state => state.text
);

export const selectStoreTextReversed = createSelector(
  selectStoreText,
  state => [...state].reverse()
);

export const selectStoreMessage = createSelector(
  selectStoreText,
  (state: State[], props: number) => state[props]
);

export const selectStoreRange = createSelector(
  selectFeature,
  state => state.range
);
