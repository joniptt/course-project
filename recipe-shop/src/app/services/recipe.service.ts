import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}
  recDet = new Subject<Recipe>();
  reciDetail: Recipe;

  getRec(): Observable<any> {
    return this.http.get<Recipe[]>('http://localhost:4000/recipes').pipe(
      tap((res) => {
        console.log(res);
        localStorage.setItem('recipes', JSON.stringify(res));
      })
    );
  }

  getOneRec(index: number): Observable<Recipe> {
    return this.http.get<Recipe>(`http://localhost:4000/recipes/${index}`).pipe(
      tap((res) => {
        this.recDet.next(res);
      })
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
