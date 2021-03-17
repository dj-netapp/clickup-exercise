import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true;
          break;

        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
          this.loading = false;
          break;

        default:
          break;
      }
    });
  }
}
