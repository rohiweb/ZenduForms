import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zf-submission-search',
  templateUrl: './submission-search.component.html',
  styleUrls: ['./submission-search.component.scss']
})
export class SubmissionSearchComponent {
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

  constructor(private router: Router) {}

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
}
