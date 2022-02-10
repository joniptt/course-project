import { Ingredients } from '../shared/ingredients.module';

export class Recipe {
  name?: string;
  description?: string;
  imagePath?: string;
  ingredients?: Ingredients[];
}
