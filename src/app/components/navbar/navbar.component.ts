import { Component, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { setRoute  } from 'src/app/state/app.actions';
import { map, Subscription } from 'rxjs';
import { navbarMenuItems } from './navbar.config';
import { selectRoute } from 'src/app/state/app.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'zf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  currentRoute$ = this.store.pipe(
    select(selectRoute),
    map(route => route.current)
  );

  menuItems = navbarMenuItems;
  routerEventsSubscription: Subscription;
  
  constructor (private router: Router, private store: Store<{app: AppState}>) {
    this.routerEventsSubscription = this.router.events.subscribe((event: Event) => 
      {
        if ( event instanceof NavigationEnd ) {
          this.store.dispatch(setRoute({route: event.url}));
        }
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }
}
