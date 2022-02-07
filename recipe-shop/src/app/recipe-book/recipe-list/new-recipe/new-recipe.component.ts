import { Component } from '@angular/core';

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent {
  constructor() {}
  recName = '';
  recDesc = '';
  recImg = '';
}
