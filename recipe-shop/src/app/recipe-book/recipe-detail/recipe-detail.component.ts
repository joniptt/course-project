import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDet: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  index: number;
  constructor(private viewRecipe: recipeService) {}

  ngOnInit(): void {
    this.viewRecipe.getDet().subscribe((response: Recipe) => {
      console.log(response);
      this.recipeDet = response;
    });
  }

  ngOnDestroy(): void {}
}
