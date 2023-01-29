import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'zf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  menuItems = [
    {
      label:  'Forms',
      link: '/forms',
      icon: {
        src: 'assets/icons/list.svg',
        width: 19,
        height: 16,
        alt: 'forms icon'
      },
      isActive: (currentRoute: string) => {
        return false;
      }
    },
    {
      label:  'Customers',
      link: '/customers',
      icon: {
        src: 'assets/icons/users.svg',
        width: 22,
        height: 14,
        alt: 'customers icon'
      },
      isActive: (currentRoute: string) => {
        return false;
      }
    },
    {
      label:  'Submissions',
      link: '/submissions',
      icon: {
        src: 'assets/icons/submissions.svg',
        width: 18,
        height: 20,
      },
      isActive: (currentRoute: string) => {
        return currentRoute === '/'
          || currentRoute === '/map'
          || currentRoute === '/list'
          || currentRoute.includes('/submissions');
      }
    },
    {
      label:  'History',
      link: '/history',
      icon: {
        src: 'assets/icons/history.svg',
        width: 21,
        height: 18,
        alt: 'history icon'
      },
      isActive: (currentRoute: string) => {
        return false;
      }
    },
    {
      label:  'Reports',
      link: '/reports',
      icon: {
        src: 'assets/icons/chart.svg',
        width: 20,
        height: 18,
        alt: 'reports icon'
      },
      isActive: (currentRoute: string) => {
        return false;
      }
    },
    {
      label:  'Workflow',
      link: '/workflow',
      icon: {
        src: 'assets/icons/chart.svg',
        width: 20,
        height: 18,
        alt: 'workflow icon'
      },
      isActive: (currentRoute: string) => {
        return false;
      }
    }
  ]
  currentRoute = '';
  routerEventsSubscription: Subscription;
  
  constructor (private router: Router) {
    this.routerEventsSubscription = this.router.events.subscribe((event: Event) => 
      {
        if ( event instanceof NavigationEnd ) {
          this.currentRoute = event.url;     
        }
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }
}
