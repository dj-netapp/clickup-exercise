import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { User } from '../model/user';

@Injectable()
export class UsersEntityService extends EntityCollectionServiceBase<User> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('User', serviceElementsFactory);
  }
}
