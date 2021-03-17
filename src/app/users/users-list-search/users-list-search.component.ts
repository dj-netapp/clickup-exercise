import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-list-search',
  templateUrl: './users-list-search.component.html',
  styleUrls: ['./users-list-search.component.scss'],
})
export class UsersListSearchComponent {
  @Output() searchTerm = new EventEmitter<string>();

  searchUsersTable(search: string): void {
    this.searchTerm.emit(search);
  }
}
