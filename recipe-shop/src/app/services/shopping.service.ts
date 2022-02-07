import { Observable } from 'rxjs';
import { Ingredients } from '../shared/ingredients.module';

export class shoppingService {
  ingredients: Ingredients[] = [
    new Ingredients('Bananas', 2),
    new Ingredients('Tomatoes', 10),
  ];

  addIngredients(ingName: string, ingAmount: number) {
    this.ingredients.push(new Ingredients(ingName, ingAmount));
  }
  addRecipeIngrList(ingredient: Ingredients[]) {
    for (let ing of ingredient) {
      this.ingredients.push(new Ingredients(ing.name, ing.amount));
    }
  }
  shoppingListObservable(): Observable<Ingredients[]> {
    return new Observable<Ingredients[]>((observer) => {
      observer.next(this.ingredients);
    });
  }
  removeIngredients() {}
  clearIngredients() {}
}
