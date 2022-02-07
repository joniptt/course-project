import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeSelectedDetail: Recipe;
  index: any;
  constructor(
    private viewRecipe: recipeService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) =>
        (this.recipeSelectedDetail = this.viewRecipe.detailRecipe(param['id']))
    );
    this.route.params.subscribe((param: Params) => (this.index = param));
  }

  addIngr() {
    this.viewRecipe.addRecipeIngr(this.recipeSelectedDetail.ingredients);
  }
}
