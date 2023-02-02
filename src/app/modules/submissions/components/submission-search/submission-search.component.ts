import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { selectRoute } from 'src/app/state/app.selectors';

@Component({
  selector: 'zf-submission-search',
  templateUrl: './submission-search.component.html',
  styleUrls: ['./submission-search.component.scss']
})
export class SubmissionSearchComponent implements OnDestroy {
  routeSegmentsSubscription: Subscription;
  routeSegments$ = this.store.pipe(
    select(selectRoute),
    map(route => route.segments)
  );

  viewModeOptions = [
    {label: 'Map', value: 'map'},
    {label: 'List', value: 'list'}
  ];

  fromOptions = [
    {label: 'denisgordiyenya1@gmail.com', value: 'denisgordiyenya1@gmail.com'},
    {label: 'denisgordiyenya2@gmail.com', value: 'denisgordiyenya2@gmail.com'},
    {label: 'denisgordiyenya3@gmail.com', value: 'denisgordiyenya3@gmail.com'}
  ];

  statusOptions = [
    {label: 'Uncomplete', value: 'uncomplete'},
    {label: 'Low Risk', value: 'low_risk'},
    {label: 'Needs Review', value: 'needs_review'}
  ];

  searchString = '';
  from = '';
  status = '';
  date = new Date();
  viewMode = 'map';

  constructor(private router: Router, private store: Store) {
    this.routeSegmentsSubscription = this.routeSegments$.subscribe(
      (segments: string[]) => {
        this.viewMode = segments.length > 1 && segments[1] || this.viewMode
      }
    )
  }

  onSearchStringChange() {
    console.log(this.searchString)
  }

  onFromChange() {
    console.log(this.from);
  }

  onStatusChange() {
    console.log(this.status);
  }

  onDateChange() {
    console.log(this.date);
  }

  onViewModeChange() {
    this.router.navigate([`/submissions/${this.viewMode}`])
  }

  ngOnDestroy(): void {
    this.routeSegmentsSubscription.unsubscribe();
  }
}
