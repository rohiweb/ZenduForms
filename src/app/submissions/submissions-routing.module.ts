import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import { SubmissionMapComponent } from './components/submission-map/submission-map.component';

const routes: Routes = [
  {path: '', component: SubmissionListComponent},
  {path: 'list', component: SubmissionListComponent},
  {path: 'map', component: SubmissionMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
