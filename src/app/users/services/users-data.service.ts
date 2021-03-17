import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable()
export class UsersDataService extends DefaultDataService<User> {
  url = `https://jsonplaceholder.typicode.com/users`;

  constructor(
    private httpClient: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super('User', httpClient, httpUrlGenerator);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get(this.url).pipe(
      map((response): User[] => {
        return response as User[];
      })
    );
  }
}
