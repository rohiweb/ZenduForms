import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'zf-submission-map',
  templateUrl: './submission-map.component.html',
  styleUrls: ['./submission-map.component.scss']
})
export class SubmissionMapComponent {
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = {lat: 46.973933, lng: 31.993757};

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ-zoK6WchBF2I01FacC-71pqlMREUUhw', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
    
  }
}
