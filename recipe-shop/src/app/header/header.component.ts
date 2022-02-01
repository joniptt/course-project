import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('page') navigation = new EventEmitter<{
    recipe: boolean;
    shop: boolean;
  }>();
  constructor() {}
  goToRecipes() {
    this.navigation.emit({ recipe: true, shop: false });
  }
  goToShoppingList() {
    this.navigation.emit({
      recipe: false,
      shop: true,
    });
  }
  ngOnInit(): void {}
}
