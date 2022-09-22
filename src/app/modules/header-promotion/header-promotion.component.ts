import { Itop_banner, Iproductos } from './../../model/productos';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css'],
})
export class HeaderPromotionComponent implements OnInit {
  path: string = Path.url;
  top_banner!: Iproductos;
  top_banner2!: Itop_banner;
  _img_tag!: string;
  _h3_tag!: string;
  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this._productsService.getData().subscribe((resp) => {
      /*Tomar la longitud del objecto*/
      console.log('resp', resp);
      let i;
      let size = 0;
      for (i in resp) {
        size++;
      }

      /*Generar un numero aleatorio*/
      let index = Math.floor(Math.random() * size);
      /*Devolvemos a la vistas un banner aleatorios*/
      //this.top_banner2 = resp[Object.keys(resp)[index]].top_banner;
      this.top_banner = resp[index];
      this._img_tag = this.top_banner.top_banner2.img_tag;
      
      this.top_banner2 = this.top_banner.top_banner2;
      this._h3_tag = this.top_banner.top_banner2.h3_tag;
    });
  }
}
