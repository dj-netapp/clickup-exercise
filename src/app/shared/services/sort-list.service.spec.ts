import { TestBed } from '@angular/core/testing';

import { SortListService } from './sort-list.service';

describe('SortListService', () => {
  let service: SortListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
