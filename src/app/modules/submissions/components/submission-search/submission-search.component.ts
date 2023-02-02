import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectRouteSegments } from 'src/app/state/app.selectors';
import { filterSubmissions, getSubmissions } from 'src/app/state/submissions/submissions.actions';
import { CONFIG } from './submissions-search.config';

@Component({
  selector: 'zf-submission-search',
  templateUrl: './submission-search.component.html',
  styleUrls: ['./submission-search.component.scss']
})
export class SubmissionSearchComponent implements OnDestroy {
  routeSegmentsSubscription: Subscription;
  routeSegments$ = this.store.select(selectRouteSegments);

  viewModeOptions = CONFIG.viewModeOptions;

  fromOptions = CONFIG.fromOptions;

  statusOptions = CONFIG.statusOptions;

  searchString = '';
  from = '';
  status = undefined;
  date = new Date();
  viewMode = 'map';

  constructor(private router: Router, private store: Store) {
    this.routeSegmentsSubscription = this.routeSegments$.subscribe(
      (segments: string[]) => {
        this.viewMode = segments.length > 1 && segments[1] || this.viewMode
      }
    )
    this.store.dispatch(getSubmissions({q: ''}));
  }

  onSearchStringChange() {
    this.store.dispatch(getSubmissions({q: this.searchString}));
  }

  onFromChange() {
    this.filterSubmissions();
  }

  onStatusChange() {
    this.filterSubmissions();
  }

  onDateChange() {
    this.filterSubmissions();
  }

  onViewModeChange() {
    this.router.navigate([`/submissions/${this.viewMode}`])
  }

  filterSubmissions(): void {
    const from = this.from === null ? '' : this.from;
    const status = this.status === null ? -1 : this.status === undefined ? -1 : this.status;
    this.store.dispatch(filterSubmissions({ from: from, status: status, date: this.date}));
  }

  ngOnDestroy(): void {
    this.routeSegmentsSubscription.unsubscribe();
  }
}
