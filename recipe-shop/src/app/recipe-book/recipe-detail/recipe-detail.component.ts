import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  recipeSelectedDetail: Recipe;
  constructor(private viewRecipe: recipeService) {
    this.viewRecipe.viewRecipeDetails.subscribe(
      (recipe: Recipe) => (this.recipeSelectedDetail = recipe)
    );
  }
}
