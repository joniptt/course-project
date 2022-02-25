import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUser } from 'src/app/login/auth-user.model';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  user: AuthUser = JSON.parse(localStorage.getItem('user'));

  constructor(
    private manRecipe: recipeService,
    private router: Router,
    private thisRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  goTo(index: number) {
    this.manRecipe.recDet.emit(this.recipes[index]);
    this.router.navigate(['detail', index], { relativeTo: this.thisRoute });
  }
  loadRecipes() {
    this.manRecipe.getRec().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
  clear() {
    this.manRecipe.delRec().subscribe(() => {
      this.recipes = [];
    });
  }

  // ngOnDestroy(): void {
  //   localStorage.removeItem('user');
  // }
  // addNewRecipe() {
  //   this.ingrs.push();
  //   if (this.recName && this.recDesc && this.recImg != '') {
  //     this.addRecipe.newRecipe(this.recName, this.recDesc, this.recImg);
  //   }
  // }
}
