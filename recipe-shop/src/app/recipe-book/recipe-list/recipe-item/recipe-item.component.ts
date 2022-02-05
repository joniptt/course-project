import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeDetail: recipeService) {}
  ngOnInit(): void {}

  selectedData() {
    this.recipeDetail.viewRecipeDetails.emit(this.recipe);
  }
}
