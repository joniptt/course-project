import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}
  @Input() recId: number;
  getRec() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }
  getDet(index: number) {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes').pipe(
      map((response) => {
        return response[index];
      })
    );
  }
  delRec() {
    return this.http.delete('http://localhost:3000/recipes/recipes');
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
