import { ICategories } from './../model/categories';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';
@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private api: string = Api.url;
  constructor(private http: HttpClient) {}
  getData(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(`${this.api}categories.json`);
  }
}
