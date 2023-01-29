import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import { SubmissionMapComponent } from './components/submission-map/submission-map.component';
import { SubmissionSearchComponent } from './components/submission-search/submission-search.component';

import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [
    SubmissionsComponent,
    SubmissionListComponent,
    SubmissionMapComponent,
    SubmissionSearchComponent
  ],
  imports: [
    CommonModule,
    SubmissionsRoutingModule,
    SelectButtonModule
  ]
})
export class SubmissionsModule { }
