import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionsModule } from './modules/submissions/submissions.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';

import { TooltipModule } from 'primeng/tooltip';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmissionsModule,
    TooltipModule,
    StoreModule.forRoot({
      app: appReducer 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
