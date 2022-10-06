import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-home-promotions',
  templateUrl: './home-promotions.component.html',
  styleUrls: ['./home-promotions.component.css'],
})
export class HomePromotionsComponent implements OnInit {
  path: string = Path.url;
  banner_default: Array<any> = [];
  category: Array<any> = [];
  url: Array<any> = [];
  preload: Boolean = false;
  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this.preload = true;
    this._productsService.getData().subscribe((resp) => {
      /*Tomar longitud de objetos*/
      let index = 0;
      let i;
      let size = 0;
      for (i in resp) {
        size++;
      }
      /*Generar un numero aleatorio*/
      if (size > 2) {
        index = Math.floor(Math.random() * (size - 2));
      }

      this._productsService
        .getLimitData(Object.keys(resp)[index], 2)
        .subscribe((resp) => {
          let i;
          for (i in resp) {
            this.banner_default.push(resp[i].default_banner);
            this.category.push(resp[i].category);
            this.url.push(resp[i].url);
          }
          this.preload = false;
        });
    });
  }
}
