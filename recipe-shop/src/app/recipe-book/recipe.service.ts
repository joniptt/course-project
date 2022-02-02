import { Recipe } from '../models/recipe-model';

export class recipeData {
  recipes: Recipe[] = [
    new Recipe(
      'Bolo',
      'Bolo de morango',
      'https://img.elo7.com.br/product/original/30B68A0/bolo-de-morango-bolo-suspiro-de-morango.jpg'
    ),
    new Recipe(
      'Panqueca',
      'Panqueca de carne moída',
      'https://img.cybercook.com.br/imagens/receitas/810/panqueca-de-carne-moida-1.jpg'
    ),
  ];
  recipeDetail: Recipe;
  onSelectedRecipe(recipe: Recipe) {
    this.recipeDetail = recipe;
  }
  addNewRecipe(name: string, desc: string, img: string) {
    this.recipes.push(new Recipe(name, desc, img));
  }
}
