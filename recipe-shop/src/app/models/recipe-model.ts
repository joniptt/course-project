import { Ingredients } from '../shared/ingredients.module';

export class Recipe {
  id?: number;
  name?: string;
  description?: string;
  imagePath?: string;
  ingredients?: Ingredients[];
}
