import { TestBed } from '@angular/core/testing';

import { GcoreSharedLibraryService } from './gcore-shared-library.service';

describe('GcoreSharedLibraryService', () => {
  let service: GcoreSharedLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcoreSharedLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
