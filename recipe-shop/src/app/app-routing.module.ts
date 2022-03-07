import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from './login/auth.guard';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ComputadoresComponent } from './_components/computadores/computadores.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login-routing.module').then((m) => m.LoginRouting),
  },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detail', component: RecipeDetailComponent },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'recipes',
        loadChildren: () =>
          import('./recipe-book/recipe.module').then(
            (m) => m.RecipeRoutingModule
          ),
      },
      { path: 'computadores', component: ComputadoresComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
