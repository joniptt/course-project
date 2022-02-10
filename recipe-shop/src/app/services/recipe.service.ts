import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable()
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}

  getRec() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }
  postRec(recForm: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recForm);
  }

  addRecIgr(ingredient: Ingredients[]) {
    this.addIngr.addRecipeIngrList(ingredient);
  }
  // newRecipe(name: string, desc: string, img: string) {
  //   this.recipes.push(new Recipe(name, desc, img, ingre));
  // }
}
