/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubcategoriasService } from './subcategorias.service';

describe('Service: Subcategorias', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcategoriasService]
    });
  });

  it('should ...', inject([SubcategoriasService], (service: SubcategoriasService) => {
    expect(service).toBeTruthy();
  }));
});
