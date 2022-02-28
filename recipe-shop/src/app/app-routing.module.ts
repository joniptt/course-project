import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from './login/auth.guard';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login-routing.module').then((m) => m.LoginRouting),
  },
  { path: 'cadastro', component: CadastroComponent },
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
      {
        path: 'shoppinglist',
        component: ShoppingListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
