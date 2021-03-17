import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SortListEvent } from '../shared/services/sort-list.service';
import { SortModeEnum } from '../shared/shared.enum';
import { User } from './model/user';
import { UsersEntityService } from './services/users-entity.service';

interface SortUserType {
  [key: string]: any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersEntityService: UsersEntityService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.users$ = this.usersEntityService.entities$.pipe(
      switchMap((users: User[]) => of(users))
    );
  }

  searchUsers(searchTerm: string): void {
    this.users$ = this.usersEntityService.entities$.pipe(
      switchMap((users: User[]) => {
        return of(
          users.filter((user: User): boolean => {
            return this.checkIfSomeValuesMatch(searchTerm, user);
          })
        );
      })
    );
  }

  checkIfSomeValuesMatch(searchTerm: string, user: User): boolean {
    const values = Object.values(user);

    return values.some(
      (value: unknown): boolean =>
        value === parseInt(searchTerm) ||
        (typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  sortColumn(sortEventObject: SortListEvent): void {
    this.users$ = this.usersEntityService.entities$.pipe(
      switchMap((users: User[]) => {
        return of(
          users
            .sort((userA, userB) =>
              this.sortByModeAndColumn(userA, userB, sortEventObject)
            )
            .map((user) => user)
        );
      })
    );
  }

  sortByModeAndColumn(
    userA: SortUserType,
    userB: SortUserType,
    sortEventObject: SortListEvent
  ): number {
    const { column, mode } = sortEventObject;

    if (userA[column] > userB[column]) {
      return mode === SortModeEnum.UP ? 1 : -1;
    }

    if (userA[column] < userB[column]) {
      return mode === SortModeEnum.UP ? -1 : 1;
    }

    return 0;
  }
}
