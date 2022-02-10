import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe-model';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private postRec: recipeService) {}
  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      recName: new FormControl('', [Validators.required]),
      recDesc: new FormControl('', Validators.required),
      recImg: new FormControl('', Validators.required),
      recIng: new FormControl([], Validators.required),
    });
  }
  addNewRecipe() {
    let recipe: Recipe = {
      name: this.recipeForm.get('recName').value,
      description: this.recipeForm.get('recDesc').value,
      imagePath: this.recipeForm.get('recImg').value,
      ingredients: this.recipeForm.get('recIng').value,
    };
    let form: FormData = new FormData();
    form.append('recipe', JSON.stringify(recipe));
    this.postRec.postRec(recipe).subscribe((response) => {
      console.log(response);
    });
    console.log(recipe);
  }
}
