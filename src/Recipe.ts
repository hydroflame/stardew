export interface Ingredient {
  Name: string;
  Amount: number;
}

export interface Recipe {
  Name: string;
  Image: string;
  Source: string;
  Ingredients: Ingredient[];
}
