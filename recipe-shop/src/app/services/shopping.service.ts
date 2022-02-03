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
  removeIngredients() {}
  clearIngredients() {}
}
