import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, DoCheck {
  recipeDet: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  index = 0;
  constructor(
    private viewRecipe: recipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((response) => {
      this.index = +response['id'];
      console.log(response);
    });
  }


  ngDoCheck(): void {

    if (this.index != ) {
      this.viewRecipe.getDet(this.index).subscribe((response) => {
        this.recipeDet = response;
        console.log(response);
      });
    }
  }
}
