import { SubcategoriasService } from './../../services/subcategorias.service';
import { ICategories } from './../../model/categories';
import { CategoriasService } from './../../services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  path: string = Path.url;
  categories!: ICategories[];
  render: Boolean = true;
  categoriesList: Array<any> = [];
  constructor(
    private _categoriasService: CategoriasService,
    private _subcategoriasService: SubcategoriasService
  ) {}

  ngOnInit() {
    this._categoriasService.getData().subscribe((resp) => {
      this.categories = resp;
      let i;
      for (i in resp) {
        this.categoriesList.push(resp[i].name);
      }
    });
  }
  callback() {
    if (this.render) {
      this.render = false;
      let arraySubCategories: any = [];
      this.categoriesList.forEach((category) => {
        this._subcategoriasService
          .getFilterData('category', category)
          .subscribe((resp) => {
            let i;
            for (i in resp) {
              arraySubCategories.push({
                category: resp[i].category,
                subcategory: resp[i].name,
                url: resp[i].url,
              });
            }
            for (i in arraySubCategories) {
              if (category == arraySubCategories[i].category) {
                $(`[category-footer='${category}']`).after(
                  `<a href="products/${arraySubCategories[i].url}">${arraySubCategories[i].subcategory}</a>`
                );
              }
            }
          });
      });
    }
  }
}
