import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../pages/login/auth.guard';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NewRecipeComponent } from './recipe-list/new-recipe/new-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const recipeRoute: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: RecipeListComponent,
    children: [
      { path: 'new', component: NewRecipeComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoute)],
  exports: [RouterModule],
  declarations: [RecipeEditComponent],
})
export class RecipeRoutingModule {}
