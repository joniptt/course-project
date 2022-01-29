import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor() {}
  recipes: Recipe[] = [];

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    console.log(this.recipes);
  }
  addRecipe(recipeProp: any) {
    this.recipes.push(
      new Recipe(recipeProp.recName, recipeProp.recDesc, recipeProp.recImg)
    );
    console.log(this.recipes);
  }
}
