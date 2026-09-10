import { TestBed } from '@angular/core/testing';

import { NgService } from './ng.service';

describe('NgService', () => {
  let service: NgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
