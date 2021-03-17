import {
  Directive,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { SortListEvent, SortListService } from '../services/sort-list.service';

@Directive({
  selector: '[appSortList]',
})
export class SortListDirective implements OnInit, OnDestroy {
  @Output() sort = new EventEmitter<SortListEvent>();
  sortColumnSubscription: Subscription;

  constructor(private sortListService: SortListService) {}

  ngOnInit(): void {
    this.sortColumnSubscription = this.sortListService.sortValue.subscribe(
      (event: SortListEvent) => {
        this.sort.emit(event);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sortColumnSubscription) {
      this.sortColumnSubscription.unsubscribe();
    }
  }
}
