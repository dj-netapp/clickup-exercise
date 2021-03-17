import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { UsersEntityService } from './users-entity.service';

@Injectable()
export class UsersResolver implements Resolve<boolean> {
  constructor(private usersEntityService: UsersEntityService) {}

  resolve(): Observable<boolean> {
    return this.usersEntityService.loaded$.pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.usersEntityService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
