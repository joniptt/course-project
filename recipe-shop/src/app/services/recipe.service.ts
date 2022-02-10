import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable()
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}

  getRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }
  postRecipe(recForm: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recForm);
  }
  getDet() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  addRecIgr(ingredient: Ingredients[]) {
    this.addIngr.addRecipeIngrList(ingredient);
  }
  // newRecipe(name: string, desc: string, img: string) {
  //   this.recipes.push(new Recipe(name, desc, img, ingre));
  // }
}
