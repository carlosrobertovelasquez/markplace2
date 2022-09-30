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
  _img_tag!: string;
  _h2_tag!: string;
  _p1_tag!: string;
  _h4_tag!: string;
  _p2_tag!: string;
  _span_tag!: string;
  _button_tag!: string;
  _category!: string;
  preload: Boolean = false;
  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this.preload = true;
    this._productsService.getData().subscribe((resp) => {
      /*Tomar la longitud del objecto*/
      let i;
      let size = 0;
      for (i in resp) {
        size++;
      }
      /*Generar un numero aleatorio*/
      let index = Math.floor(Math.random() * size);
      /*Devolvemos a la vistas un banner aleatorios*/
      this.top_banner = resp[index];
      this._img_tag = this.top_banner.top_banner.img_tag;
      this._h2_tag = this.top_banner.top_banner.h2_tag;
      this._p1_tag = this.top_banner.top_banner.P1_tag;
      this._h4_tag = this.top_banner.top_banner.h4_tag;
      this._p2_tag = this.top_banner.top_banner.p2_tag;
      this._span_tag = this.top_banner.top_banner.span_tag;
      this._button_tag = this.top_banner.top_banner.button_tag;
      this._category = this.top_banner.category;
      this.preload = false;
    });
  }
}
