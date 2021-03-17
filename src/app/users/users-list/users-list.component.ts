import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { SortListEvent } from 'src/app/shared/services/sort-list.service';
import { SortModeEnum } from 'src/app/shared/shared.enum';
import { User } from '../model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  sortModeEnum = SortModeEnum;

  @Input() users: User[];
  @Output() sortByTerm = new EventEmitter<SortListEvent>();

  // columns that we want to render.
  // hardcoding, so as not to involve calculations.
  columns = ['id', 'name', 'username', 'website', 'email', 'phone'];

  trackById(index: number, user: User): number {
    return user.id;
  }

  sortColumnByName(event: SortListEvent): void {
    this.sortByTerm.emit(event);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
