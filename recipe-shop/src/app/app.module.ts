import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SlicePipe } from './pipes/slice.pipe';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { NewRecipeComponent } from './recipe-book/recipe-list/new-recipe/new-recipe.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-book/recipe.module';
import { AuthInterpceptorService } from './services/auth-interceptor.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { recipeService } from './services/recipe.service';
import { shoppingService } from './services/shopping.service';
import { UsuarioService } from './services/usuario.service';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    NewRecipeComponent,
    LoginComponent,
    CadastroComponent,
    ShortenPipe,
    SlicePipe,
    FilterPipe,
  ],
  imports: [
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
    recipeService,
    shoppingService,
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterpceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
