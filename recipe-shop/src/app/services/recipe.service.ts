import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}
  @Input() recId: number;
  reciDetail: Recipe;
  getRec(): Observable<Recipe> {
    return this.http.get<Recipe>(
      'https://consumo-api-b2e4c-default-rtdb.firebaseio.com/recipes.json',
      {
        headers: new HttpHeaders('Custom-headers: hello'),
      }
    );
  }
  getDet() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }
  delRec() {
    return this.http.delete('http://localhost:3000/recipes');
  }
  postRec(recForm: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(
      'https://consumo-api-b2e4c-default-rtdb.firebaseio.com/recipes.json',
      recForm
    );
  }

  addRecIgr(ingredient: Ingredients[]) {
    this.addIngr.addRecipeIngrList(ingredient);
  }
  // newRecipe(name: string, desc: string, img: string) {
  //   this.recipes.push(new Recipe(name, desc, img, ingre));
  // }
}
