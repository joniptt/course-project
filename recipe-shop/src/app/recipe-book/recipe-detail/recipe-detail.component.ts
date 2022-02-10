import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDet: Recipe;
  index: any;
  constructor(
    private viewRecipe: recipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => (this.index = +param));
    this.viewRecipe
      .getRec()
      .pipe(
        map((responseData) => {
          console.log(responseData[this.index]);
          var reci: Recipe;
          for (let data of responseData) {
            if (data[this.index] === responseData[this.index]) {
              reci = data;
            }
          }
          return reci;
        })
      )
      .subscribe((response) => {
        this.recipeDet = response;
      });
  }
}
