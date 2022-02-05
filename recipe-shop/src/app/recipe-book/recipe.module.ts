import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const recipeRoute: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
    children: [{ path: 'detail/:name', component: RecipeDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(recipeRoute)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
