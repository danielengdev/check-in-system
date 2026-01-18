import { TestBed } from '@angular/core/testing';

import { CheckinServices} from './checking.services';

describe('CheckinServices', () => {
  let service: CheckinServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
