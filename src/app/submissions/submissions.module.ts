import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import { SubmissionMapComponent } from './components/submission-map/submission-map.component';
import { SubmissionSearchComponent } from './components/submission-search/submission-search.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    SubmissionsComponent,
    SubmissionListComponent,
    SubmissionMapComponent,
    SubmissionSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    SubmissionsRoutingModule,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule,
    CalendarModule
  ]
})
export class SubmissionsModule { }
