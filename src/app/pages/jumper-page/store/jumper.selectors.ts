import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JumperState } from "./jumper.reducer";

export const storeFeatureKey = 'jumper';

export interface AppWithJumperState extends JumperState {
  [storeFeatureKey]: JumperState;
}

export const selectFeature = createFeatureSelector<AppWithJumperState, JumperState>(storeFeatureKey);

export const selectStore = createSelector(
  selectFeature,
  state => state
);

// export const selectFieldSizes = createSelector(
//   selectFeature,
//   state => state.field
// );

