import { Ingredients } from '../shared/ingredients.module';

export class shoppingService {
  ingredients: Ingredients[] = [
    new Ingredients('Bananas', 2),
    new Ingredients('Tomatoes', 10),
  ];

  addIngredients(ingredient: string, amount: number) {
    this.ingredients.push(new Ingredients(ingredient, amount));
  }
  removeIngredients() {}
  clearIngredients() {}
}
