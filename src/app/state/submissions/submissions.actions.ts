import { createAction, props } from '@ngrx/store';
import { Submission } from 'src/app/models/submission.model';

export const getSubmissions = createAction('[Submissions Component] GetSubmissions', props<{q: string}>());
export const setSubmissions = createAction('[Submissions Component] GetSubmissions Success', props<{submissions: Submission[]}>());
export const setSubmissionsError = createAction('[Submissions Component] GetSubmissions Error', props<{error: Error}>());
export const filterSubmissions = createAction('[Submissions Component] FilterSubmissions', props<{from: string, status: number, date: Date}>());
export const selectSubmission = createAction('[Submissions Component] SelectSubmissions', props<{submission: Submission | undefined}>());