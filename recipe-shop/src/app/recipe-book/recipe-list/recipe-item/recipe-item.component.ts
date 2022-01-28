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
  @Output() recipeProps = new EventEmitter<{
    recName: string;
    recDesc: string;
    recImg: string;
  }>();

  addRecipe() {
    if (this.recipeName && this.recipeDesc != '') {
      this.recipeProps.emit({
        recName: this.recipeName,
        recDesc: this.recipeDesc,
        recImg: this.recipeImg,
      });
    }
  }
}
