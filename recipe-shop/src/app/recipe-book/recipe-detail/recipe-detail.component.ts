import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipeDet: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  unsubs: Subscription;

  constructor(
    private viewRecipe: recipeService,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {}

  ngOnInit() {
    this.viewRecipe.recDet.subscribe((res) => {
      this.recipeDet = res;
    });
  }

  loadRec() {}
}
