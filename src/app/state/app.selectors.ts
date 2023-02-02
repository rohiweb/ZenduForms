import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectApp = createFeatureSelector<AppState>('app');
export const selectRoute = createSelector(
  selectApp,
  (state: AppState) => state && state.route
);