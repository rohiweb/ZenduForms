import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectApp = createFeatureSelector<AppState>('app');
export const selectRoute = createSelector(
  selectApp,
  (state: AppState) => state && state.route
);
export const selectCurrentRoute = createSelector(
  selectApp,
  (state: AppState) => state && state.route && state.route.current
);
export const selectRouteSegments = createSelector(
  selectApp,
  (state: AppState) => state && state.route && state.route.segments
);