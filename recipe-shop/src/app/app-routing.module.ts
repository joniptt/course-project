import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ComputadoresComponent } from './pages/computadores/computadores.component';
import { AuthGuard } from './pages/login/auth.guard';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login-routing.module').then((m) => m.LoginRouting),
  },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detail', component: RecipeDetailComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'computadores', component: ComputadoresComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
