import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor(private addRecipe: recipeService) {}
  @Output('sendDetails') emitDetails = new EventEmitter<Recipe>();
  recipes: Recipe[] = this.addRecipe.recipes;
  ingrs: [] = [];
  recName = '';
  recDesc = '';
  recImg = '';
  onRecipeSelected(recipe: Recipe) {
    this.emitDetails.emit(recipe);
  }
  // addNewRecipe() {
  //   this.ingrs.push();
  //   if (this.recName && this.recDesc && this.recImg != '') {
  //     this.addRecipe.newRecipe(this.recName, this.recDesc, this.recImg);
  //   }
  // }
}
