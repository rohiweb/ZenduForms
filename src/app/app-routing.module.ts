import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { SubmissionsComponent } from './submissions/submissions.component';

const getSubmissionsRoutes = () => import('./submissions/submissions-routing.module').then(m => m.SubmissionsRoutingModule)

const routes: Routes = [
  {path: '', component: SubmissionsComponent, loadChildren: getSubmissionsRoutes},
  {path: 'submissions', component: SubmissionsComponent, loadChildren: getSubmissionsRoutes},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
