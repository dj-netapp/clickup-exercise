import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface SortListEvent {
  column: string;
  mode: string;
}

@Injectable()
export class SortListService {
  sort = new Subject<SortListEvent>();
  sortValue = this.sort.asObservable();

  sortColumn(event: SortListEvent): void {
    this.sort.next(event);
  }
}
