import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  recipeDet: Recipe = {};
  index = 0;
  constructor(
    private viewRecipe: recipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = this.viewRecipe.recId;
    this.viewRecipe
      .getDet()
      .pipe(
        map((response) => {
          return response[this.index];
        })
      )
      .subscribe((recDet) => {
        console.log(recDet);
        this.recipeDet = recDet;
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.index = this.viewRecipe.recId;
    this.viewRecipe
      .getDet()
      .pipe(
        map((response) => {
          return response[this.index];
        })
      )
      .subscribe((recDet) => {
        console.log(recDet);
        this.recipeDet = recDet;
      });
  }
}
