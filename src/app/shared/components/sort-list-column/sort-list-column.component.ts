import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  SortListEvent,
  SortListService,
} from 'src/app/shared/services/sort-list.service';
import { SortModeEnum } from '../../shared.enum';

@Component({
  selector: 'app-sort-list-column',
  templateUrl: './sort-list-column.component.html',
  styleUrls: ['./sort-list-column.component.scss'],
})
export class SortListColumnComponent implements OnInit {
  sortModeAsc = SortModeEnum.UP;
  sortModeDesc = SortModeEnum.DOWN;
  columnSortSubscription: Subscription;

  @Input() columnToSort: string;
  @Input() sortMode = '';

  constructor(private sortListService: SortListService) {}

  @HostListener('click')
  sortColumn(): void {
    this.sortMode =
      this.sortMode === this.sortModeDesc
        ? this.sortModeAsc
        : this.sortModeDesc;

    this.sortListService.sortColumn({
      column: this.columnToSort,
      mode: this.sortMode,
    });
  }

  ngOnInit(): void {
    this.columnSortSubscription = this.sortListService.sortValue.subscribe(
      (event: SortListEvent) => {
        if (this.columnToSort !== event.column) {
          this.sortMode = '';
        }
      }
    );
  }
}
