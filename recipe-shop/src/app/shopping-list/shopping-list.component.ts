import { Component, OnInit } from '@angular/core';
import { shoppingService } from '../services/shopping.service';
import { Ingredients } from '../shared/ingredients.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: Ingredients[];
  constructor(private shoppingItens: shoppingService) {}

  ngOnInit(): void {
    this.ingredientsList = this.shoppingItens.ingredients;
  }
}
