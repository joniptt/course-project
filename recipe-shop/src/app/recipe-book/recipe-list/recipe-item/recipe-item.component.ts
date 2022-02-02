import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() emitRecipe = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {}
  selectedRecipe() {
    this.emitRecipe.emit();
  }
}
