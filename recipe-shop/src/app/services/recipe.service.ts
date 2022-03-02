import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}
  @Input() recId: number;

  reciDetail: Recipe;

  getRec(): Observable<any> {
    return this.http.get<Recipe[]>('http://localhost:4000/recipes').pipe(
      tap((res) => {
        console.log(res);
        localStorage.setItem('recipes', JSON.stringify(res));
      })
    );
  }

  getOneRec(): Observable<Recipe> {
    return this.http.get<Recipe>(
      'http://localhost:4000/recipes' + JSON.stringify(this.recId)
    );
  }

  delRec() {
    return this.http.delete('http://localhost:4000/recipes');
  }

  postRec(recForm: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>('http://localhost:4000/recipes/add', recForm);
  }

  addRecIgr(ingredient: Ingredients[]) {
    this.addIngr.addRecipeIngrList(ingredient);
  }
  // newRecipe(name: string, desc: string, img: string) {
  //   this.recipes.push(new Recipe(name, desc, img, ingre));
  // }
}
