/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Stockservice2Service } from './stockservice2.service';

describe('Stockservice2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Stockservice2Service]
    });
  });

  it('should ...', inject([Stockservice2Service], (service: Stockservice2Service) => {
    expect(service).toBeTruthy();
  }));
});
