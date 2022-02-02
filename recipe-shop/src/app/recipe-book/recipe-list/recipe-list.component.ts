import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeData } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output('sendDetails') emitDetails = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  recName = '';
  recDesc = '';
  recImg = '';
  constructor(private recipeService: recipeData) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }
  newRecipe() {
    this.recipeService.addNewRecipe(this.recName, this.recDesc, this.recImg);
  }
  addRecipeDetail(recipe: Recipe) {
    this.recipeService.onSelectedRecipe(recipe);
  }
}
