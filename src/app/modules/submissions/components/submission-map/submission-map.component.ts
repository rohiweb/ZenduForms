import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFilteredSubmissions, selectIsLoading, selectSelectedSubmission } from 'src/app/state/submissions/submissions.selectors';
import { Submission } from 'src/app/models/submission.model';
import { selectSubmission } from 'src/app/state/submissions/submissions.actions';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CONFIG } from './submissions-map.config';

@Component({
  selector: 'zf-submission-map',
  templateUrl: './submission-map.component.html',
  styleUrls: ['./submission-map.component.scss']
})
export class SubmissionMapComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  isLoading$ = this.store.select(selectIsLoading);
  submissions$ = this.store.select(selectFilteredSubmissions).pipe(
    tap((submissions: Submission[]) => {
      if (submissions && submissions.length && this.googleMap) {
        this.googleMap.panTo(submissions[0].location)
      }
    })
  );
  selectedSubmission$ = this.store.select(selectSelectedSubmission);

  apiLoaded$: Observable<boolean>;
  defaultCenter: google.maps.LatLngLiteral = CONFIG.CENTER_LOCATION;
  markerOptions: google.maps.MarkerOptions = {draggable: false};

  constructor(httpClient: HttpClient, private store: Store) {
    this.apiLoaded$ = httpClient.jsonp(CONFIG.GOOGLE_MAPS_URL, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  selectSubmission(submission: Submission) {
    this.store.dispatch(selectSubmission({submission: submission}));
    if (submission) {
      this.googleMap.panTo(submission.location);
    }
  }

  openInfoWindow(marker: MapMarker, submission: Submission) {
    this.selectSubmission(submission);
    this.infoWindow.open(marker);
  }
}
