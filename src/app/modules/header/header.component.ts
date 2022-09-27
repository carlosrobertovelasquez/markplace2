import { SubcategoriasService } from './../../services/subcategorias.service';
import { ICategories } from './../../model/categories';
import { CategoriasService } from './../../services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  path: string = Path.url;
  categories!: ICategories[];
  arrayTitleList: Array<any> = [];
  render: Boolean = true;

  constructor(
    private _categoriasService: CategoriasService,
    private _subcategoriasService: SubcategoriasService
  ) {}

  ngOnInit() {
    /*Tomar datos de la categorias*/
    this._categoriasService.getData().subscribe((resp) => {
      this.categories = resp;
      /*Recorremos la coleccion de categoria para tomar la lista de titulos*/
      for (let i = 0; i < resp.length; i++) {
        const element = resp[i];
        /*Separamos la lista de titulos en un inidce de un array*/
        this.arrayTitleList.push(JSON.parse(element.title_list));
      }
    });
  }
  /* funcion que nos avisan cunado termina*/
  callback() {
    if (this.render) {
      this.render = false;
      let arraySubCategories: any = [];
      /*Hacemos un recorrido por la lista de titulos*/
      this.arrayTitleList.forEach((titleList) => {
        /*Separar individualmente los titulos*/
        for (let i = 0; i < titleList.length; i++) {
          /*Tomamos la coleccion de las sub-categorias filtrado con la lista de titulos*/
          const element = titleList[i];
          this._subcategoriasService
            .getFilterData('title_list', element)
            .subscribe((resp) => {
              arraySubCategories.push(resp);
              /*Hacemos un recorrido por la coleccion general de subcategorias*/
              for (let i = 0; i < arraySubCategories.length; i++) {
                const element = arraySubCategories[i];
                console.log('element', element);
              }
            });
        }
      });
    }
  }
}
