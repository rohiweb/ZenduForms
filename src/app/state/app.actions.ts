import { createAction, props } from '@ngrx/store';

export const setRoute = createAction('[Navbar Component] SetRoute', props<{route: string}>());