import { Iproductos } from './../../../model/productos';
import { inject } from '@angular/core/testing';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/config';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent implements OnInit {
  path: string = Path.url;
  banner_home: Array<any> = [];
  category: Array<any> = [];
  url: Array<any> = [];
  render = true;
  constructor(
    private _productsService: ProductsService,
    private _ngbCarouselConfig: NgbCarouselConfig
  ) {}

  ngOnInit() {
    this._productsService.getData().subscribe((resp) => {
      /*Tomar longitud de objetos*/
      let index = 0;
      let i;
      let size = 0;
      for (i in resp) {
        size++;
      }
      /*Generar un numero aleatorio*/
      if (size > 5) {
        index = Math.floor(Math.random() * (size - 5));
      }

      this._productsService
        .getLimitData(Object.keys(resp)[index], 5)
        .subscribe((resp) => {
          let i;
          for (i in resp) {
            this.banner_home.push(resp[i].horizontal_slider);
            this.category.push(resp[i].category);
            this.url.push(resp[i].url);
          }
        });
    });
  }
}
