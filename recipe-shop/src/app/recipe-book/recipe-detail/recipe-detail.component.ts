import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipeDet: Recipe;
  index: any;
  constructor(
    private viewRecipe: recipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => (this.index = +param));
    this.viewRecipe
      .getDet()
      .pipe()
      .subscribe((response: Recipe[]) => {
        for (let recipe of response) {
          this.recipeDet = recipe[this.index];
        }
      });
  }

  addIngr() {
    this.viewRecipe.addRecIgr(this.recipeDet.ingredients);
  }
  ngOnDestroy(): void {}
}
