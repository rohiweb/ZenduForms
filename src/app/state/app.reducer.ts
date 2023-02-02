import { createReducer, on } from '@ngrx/store';
import { setRoute } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  route: {
    current: '',
    segments: []
  }
};

export const appReducer = createReducer(
  initialState,
  on(setRoute, (state, { route }) => ({ ...state, route: {current: route, segments: route.replace(/^\//,'').split('/')} }))
);