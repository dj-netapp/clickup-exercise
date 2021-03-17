import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortListColumnComponent } from './sort-list-column.component';

describe('SortListColumnComponent', () => {
  let component: SortListColumnComponent;
  let fixture: ComponentFixture<SortListColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortListColumnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortListColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
