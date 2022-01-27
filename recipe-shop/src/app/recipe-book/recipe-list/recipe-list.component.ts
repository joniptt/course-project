import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  name = 'Receita';
  img = 'https://live.staticflickr.com/4076/4756486114_0bc21e6fa3_c.jpg';
  desc = 'Essa é uma receita de bolo';

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    console.log(this.recipes);
  }

  recipes: Recipe[] = [
    new Recipe('bolo', this.desc, this.img),
    new Recipe('batata', this.desc, this.img),
    new Recipe(this.name, this.desc, this.img),
  ];

  constructor() {}
}
