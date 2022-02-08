import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private addRecipe: recipeService) {}
  ngOnInit(): void {
    this.addRecipe.getRecipe().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  // addNewRecipe() {
  //   this.ingrs.push();
  //   if (this.recName && this.recDesc && this.recImg != '') {
  //     this.addRecipe.newRecipe(this.recName, this.recDesc, this.recImg);
  //   }
  // }
}
