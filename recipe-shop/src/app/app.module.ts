import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersistenceModule } from 'angular-persistence';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SlicePipe } from './pipes/slice.pipe';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { NewRecipeComponent } from './recipe-book/recipe-list/new-recipe/new-recipe.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-book/recipe.module';
import { AuthInterpceptorService } from './services/auth-interceptor.service';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    NewRecipeComponent,
    LoginComponent,
    CadastroComponent,
    ShortenPipe,
    SlicePipe,
    FilterPipe,
  ],
  imports: [
    PersistenceModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RecipeRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterpceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
