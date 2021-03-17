import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortListDirective } from './directives/sort-list.directive';
import { SortListColumnComponent } from './components/sort-list-column/sort-list-column.component';
import { SortListService } from './services/sort-list.service';

@NgModule({
  declarations: [SortListDirective, SortListColumnComponent],
  exports: [SortListDirective, SortListColumnComponent],
  imports: [CommonModule],
  providers: [SortListService],
})
export class SharedModule {}
