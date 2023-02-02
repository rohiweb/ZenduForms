import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SubmissionsService } from 'src/app/modules/submissions/submissions.service';
import { setSubmissions, setSubmissionsError, getSubmissions } from './submissions.actions';

@Injectable()
export class SubmissionsEffects {

  getSubmissions$ = createEffect(() => { return this.actions$.pipe(
    ofType(getSubmissions),
    mergeMap(({ q }) => this.submissionsService.getSubmissions(q)
      .pipe(
        map(submissions => (setSubmissions({submissions: submissions}))),
        catchError(() => of(setSubmissionsError({error: Error('[Submissions Component] GetSubmissions Error')})))
      ))
    )
  });

  constructor(
    private actions$: Actions,
    private submissionsService: SubmissionsService
  ) {}
}