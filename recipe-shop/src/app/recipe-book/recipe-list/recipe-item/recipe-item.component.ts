import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  recipeName = '';
  recipeDesc = '';
  recipeImg = '';
  @Output('recItens') recipeProps = new EventEmitter<any>();

  addRecipe() {
    if (this.recipeName && this.recipeDesc && this.recipeImg != '') {
      this.recipeProps.emit({
        recName: this.recipeName,
        recDesc: this.recipeDesc,
        recImg: this.recipeImg,
      });
      console.log(this.recipeDesc);
    }
  }
}
