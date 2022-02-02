import { Component, OnChanges } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeData } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnChanges {
  recipeDetail: Recipe;
  constructor(private recipeService: recipeData) {}
  ngOnChanges(): void {
    this.recipeDetail = this.recipeService.recipeDetail;
  }

  ngOnInit(): void {}
}
