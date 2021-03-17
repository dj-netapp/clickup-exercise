import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEntityService } from './services/users-entity.service';
import { UsersDataService } from './services/users-data.service';
import { UsersResolver } from './services/users.resolver';
import { UsersListSearchComponent } from './users-list-search/users-list-search.component';
import { SharedModule } from '../shared/shared.module';

const entityMetadata: EntityMetadataMap = {
  User: {},
};
@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersListSearchComponent],
  imports: [
    CommonModule,
    CdkTableModule,
    DragDropModule,
    MatTableModule,
    SharedModule,
    UsersRoutingModule,
  ],
  providers: [UsersDataService, UsersEntityService, UsersResolver],
})
export class UsersModule {
  constructor(
    private entityDefinitionService: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private usersDataService: UsersDataService
  ) {
    this.entityDefinitionService.registerMetadataMap(entityMetadata);
    this.entityDataService.registerService('User', this.usersDataService);
  }
}
