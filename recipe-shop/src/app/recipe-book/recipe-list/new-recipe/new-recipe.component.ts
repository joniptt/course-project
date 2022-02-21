import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  loading = false;
  error = null;
  constructor(private postRec: recipeService) {}
  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      ingredients: new FormControl([]),
    });
  }
  addNewRecipe() {
    let recipe = this.recipeForm.value;
    this.loading = true;
    if (!this.recipeForm.invalid) {
      this.postRec.postRec(recipe).subscribe(
        (response) => {
          console.log(response);
          this.loading = false;
        },
        (error) => {}
      );
    } else {
      console.log('Preencha os campos');
      alert('Dados para receita inválidos!');
      this.loading = false;
    }
  }
}
