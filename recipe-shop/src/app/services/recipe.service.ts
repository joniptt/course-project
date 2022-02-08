import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable()
export class recipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Hamburguer',
      'Bread, Cheese, Fries, Tomato, Letuce, Meat',
      'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg',
      [new Ingredients('Bread, Meat, Fries, Cheese', 2)]
    ),
    new Recipe(
      'Lasanha',
      'Pasta, Cheese, Meat',
      'https://www.sabornamesa.com.br/media/k2/items/cache/13b5e0deaf19b06816d21e67ad4e211c_XL.jpg',
      [new Ingredients('Cheese, Meat, Pasta', 1)]
    ),
  ];

  constructor(private addIngr: shoppingService, private http: HttpClient) {}

  getRecipe() {
    return this.http.get('http://localhost:3000/recipes');
  }
  postRecipe(recForm: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recForm);
  }
  detailRecipe(index: number) {
    return this.recipes[index];
  }

  updateRecipe(recipe: Recipe) {}
  addRecipeIngr(ingredient: Ingredients[]) {
    this.addIngr.addRecipeIngrList(ingredient);
  }
  // newRecipe(name: string, desc: string, img: string) {
  //   this.recipes.push(new Recipe(name, desc, img, ingre));
  // }
}
