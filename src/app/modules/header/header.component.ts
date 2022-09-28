import { SubcategoriasService } from './../../services/subcategorias.service';
import { ICategories } from './../../model/categories';
import { CategoriasService } from './../../services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';
declare var jQuery: any;
declare var $: any;
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
      let i;
      for (i in resp) {
        /*Separamos la lista de titulos en un inidce de un array*/
        this.arrayTitleList.push(JSON.parse(resp[i].title_list));
      }
    });
  }
  /* funcion que nos avisan cuando termina*/
  callback() {
    if (this.render) {
      this.render = false;
      let arraySubCategories: any = [];
      /*Hacemos un recorrido por la lista de titulos*/
      this.arrayTitleList.forEach((titleList) => {
        /*Separar individualmente los titulos*/
        let i;
        for (let i in titleList) {
          /*Tomamos la coleccion de las sub-categorias filtrado con la lista de titulos*/
          this._subcategoriasService
            .getFilterData('title_list', titleList[i])
            .subscribe((resp) => {
              arraySubCategories.push(resp);
              /*Hacemos un recorrido por la coleccion general de subcategorias*/
              let f;
              let g;
              let arrayTitleName: any = [];
              for (f in arraySubCategories) {
                /*Hacemos un recorrido por la coleccion particular de subcategoria*/
                for (g in arraySubCategories[f]) {
                  /*Creamos un array de objetos clasificando cada subcategoria cn su respectiva lista de titulo*/
                  arrayTitleName.push({
                    titleList: arraySubCategories[f][g].title_list,
                    subcategory: arraySubCategories[f][g].name,
                    url: arraySubCategories[f][g].url,
                  });
                }
              }
              /*Recorremos el array de objetos nuevos para buscar coincidencia con las listas de titulo*/
              for (f in arrayTitleName) {
                if (titleList[i] == arrayTitleName[f].titleList) {
                  /*Imprimir el nombre de subcategoria debajo de el listado correspondiente*/
                  $(`[titleList='${titleList[i]}']`).append(
                    `<li>
                      <a href="products/${arrayTitleName[f].url}">${arrayTitleName[f].subcategory}</a>
                    </li>
                    `
                  );
                }
              }
            });
        }
      });
    }
  }
}
