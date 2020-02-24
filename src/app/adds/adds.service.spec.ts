

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { HttpErrorHandler } from '../error.service';

import { AddsService } from './adds.service';
import { Adds } from './adds';
import { Type } from '@angular/core';

describe('OnwerService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let addsService: AddsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AddsService,
        HttpErrorHandler
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    addsService = TestBed.get(AddsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getAdds', () => {
    let expectedAddss: Adds[];

    beforeEach(() => {
      addsService = TestBed.get(AddsService);
      expectedAddss = [
        { id: 1, firstName: 'A' },
        { id: 2, firstName: 'B' },
      ] as Adds[];
    });

    it('should return expected addss (called once)', () => {

      addsService.getAdds().subscribe(
        addss => expect(addss).toEqual(expectedAddss, 'should return expected addss'),
        fail
      );
      const req = httpTestingController.expectOne(addsService.entityUrl);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedAddss);
    });
  });

});
