export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: [];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: []
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
