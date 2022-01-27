import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  name = 'a';
  img = 'b';
  desc = 'c';

  recipes: Recipe[] = [new Recipe(this.name, this.desc, this.img)];

  constructor() {}
}
