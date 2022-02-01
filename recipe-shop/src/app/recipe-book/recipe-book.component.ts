import { Component } from '@angular/core';
import { Recipe } from '../models/recipe-model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
  selectedRecipe: Recipe;
  showDetail = false;
  warning = 'Nada para mostrar!';
  constructor() {}
  recipeDetail(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.showDetail = true;
    console.log(this.selectedRecipe);
  }
}
