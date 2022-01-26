import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  name = 'Panqueca';
  img =
    'https://cozinhalegal.com.br/files/manager/1/819/Receita-Waffle-Americano-Fofinho.jpg';
  desc = 'Mel e Panqueca';

  recipes: Recipe[] = [new Recipe(this.name, this.desc, this.img)];

  constructor() {}
}
