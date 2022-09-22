import { Iproductos } from './../model/productos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api: string = Api.url;
  constructor(private http: HttpClient) {}
  getData(): Observable<Iproductos[]> {
    return this.http.get<Iproductos[]>(`${this.api}products.json`);
  }
}
