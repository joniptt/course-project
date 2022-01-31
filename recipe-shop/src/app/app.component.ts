import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showRecipe = false;
  showShoppingList = false;
  changePage(pageStatus: { recipe: boolean; shop: boolean }) {
    this.showRecipe = pageStatus.recipe;
    this.showShoppingList = pageStatus.shop;
    console.log(this.showRecipe);
  }
}
