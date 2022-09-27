import { Isubcategorias } from './../model/subcategorias';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';

@Injectable({
  providedIn: 'root',
})
export class SubcategoriasService {
  private api: string = Api.url;
  constructor(private http: HttpClient) {}
  getFilterData(
    orderBy: string,
    equalTo: string
  ): Observable<Isubcategorias[]> {
    return this.http.get<Isubcategorias[]>(
      `${this.api}sub-categories.json?orderBy="${orderBy}"&equalTo="${equalTo}"&print=pretty`
    );
  }
}
