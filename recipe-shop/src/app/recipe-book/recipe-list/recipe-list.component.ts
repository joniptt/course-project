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
  filterName = '';
  constructor(private manRecipe: recipeService) {}
  ngOnInit(): void {
    this.manRecipe.getRec().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
  clear() {
    this.manRecipe.delRec().subscribe(() => {
      this.recipes = [];
    });
  }

  // addNewRecipe() {
  //   this.ingrs.push();
  //   if (this.recName && this.recDesc && this.recImg != '') {
  //     this.addRecipe.newRecipe(this.recName, this.recDesc, this.recImg);
  //   }
  // }
}
