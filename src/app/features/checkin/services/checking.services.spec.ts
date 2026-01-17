import { TestBed } from '@angular/core/testing';

import { CheckingServices } from './checking.services';

describe('CheckingServices', () => {
  let service: CheckingServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
