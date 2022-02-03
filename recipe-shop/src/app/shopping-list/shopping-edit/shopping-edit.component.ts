import { Component, Input, OnInit } from '@angular/core';
import { shoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Input() shopItemId: number;
  shoppingListItem = '';
  shoppingListAmount = 0;
  constructor(private shoppingListManage: shoppingService) {}
  addItemList() {
    if (this.shoppingListItem != '' && this.shoppingListAmount != 0) {
      this.shoppingListManage.addIngredients(
        this.shoppingListItem,
        this.shoppingListAmount
      );
    } else {
      console.log('Não foi possivel adicionar os itens a lista!');
    }
  }

  clearItemList() {}
  ngOnInit(): void {}
}
