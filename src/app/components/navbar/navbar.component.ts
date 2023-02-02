import { Component, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setRoute  } from 'src/app/state/app.actions';
import { Subscription } from 'rxjs';
import { CONFIG } from './navbar.config';
import { selectCurrentRoute } from 'src/app/state/app.selectors';

@Component({
  selector: 'zf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  currentRoute$ = this.store.select(selectCurrentRoute);

  menuItems = CONFIG.navbarMenuItems;
  routerEventsSubscription: Subscription;
  
  constructor (private router: Router, private store: Store) {
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
