import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NewRecipeComponent } from './recipe-list/new-recipe/new-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { selectRecipeComponent } from './select-rec/select-rec.component';

const recipeRoute: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: RecipeListComponent,
    children: [
      { path: '', component: selectRecipeComponent },
      { path: 'new', component: NewRecipeComponent },
      { path: 'detail/:id', component: RecipeDetailComponent },
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
