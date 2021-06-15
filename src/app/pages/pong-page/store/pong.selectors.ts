import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PongState } from "./pong.reducer";

export const storeFeatureKey = 'pong';

export interface AppWithPongState extends PongState {
  [storeFeatureKey]: PongState;
}

export const selectFeature = createFeatureSelector<AppWithPongState, PongState>(storeFeatureKey);

export const selectStore = createSelector(
  selectFeature,
  state => state
);

export const selectFieldSizes = createSelector(
  selectFeature,
  state => state.field
);

export const selectWalls = createSelector(
  selectFeature,
  state => state.walls
);

export const selectBall = createSelector(
  selectFeature,
  state => state.ball
);

// export const selectStoreTextReversed = createSelector(
//   selectStoreText,
//   state => [...state].reverse()
// );

// export const selectStoreMessage = createSelector(
//   selectStoreText,
//   (state: State[], props: number) => state[props]
// );

// export const selectStoreRange = createSelector(
//   selectFeature,
//   state => state.range
// );
