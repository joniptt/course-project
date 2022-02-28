import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe-model';
import { Ingredients } from '../shared/ingredients.module';
import { shoppingService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class recipeService {
  constructor(private addIngr: shoppingService, private http: HttpClient) {}
  @Input() recId: number;

  @Output() recDet = new EventEmitter<Recipe>();

  reciDetail: Recipe;

  getRec(): Observable<any> {
    return this.http.get<Recipe[]>('http://localhost:4000/recipes', {
      headers: new HttpHeaders('Custom-headers: hello'),
    });
  }

  getOneRec(): Observable<any> {
    return this.http.get('http://localhost:4000/recipes');
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
