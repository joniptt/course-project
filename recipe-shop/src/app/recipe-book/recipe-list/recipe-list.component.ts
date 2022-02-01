import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor() {}
  @Output('sendDetails') emitDetails = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Bolo',
      'Bolo de morango',
      'https://img.elo7.com.br/product/original/30B68A0/bolo-de-morango-bolo-suspiro-de-morango.jpg'
    ),
    new Recipe(
      'Panqueca',
      'Panqueca de carne moída',
      'https://img.cybercook.com.br/imagens/receitas/810/panqueca-de-carne-moida-1.jpg'
    ),
  ];
  recName = '';
  recDesc = '';
  recImg = '';
  onRecipeSelected(recipe: Recipe) {
    this.emitDetails.emit(recipe);
  }
  addNewRecipe() {
    if (this.recName && this.recDesc && this.recImg != '') {
      this.recipes.push(new Recipe(this.recName, this.recDesc, this.recImg));
    }
  }
  // deleteRecipe(i: number) {
  //   this.recipes.splice(i, 1);
  //   console.log(this.recipes);
  // }
}
