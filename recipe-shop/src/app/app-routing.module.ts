import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AuthGuard } from './pages/login/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login-routing.module').then((m) => m.LoginRouting),
  },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './pages/produtos/produtos-routing/produtos-routing-routing.module'
          ).then((m) => m.ProdutosRoutingRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
