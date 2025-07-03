export interface Recipe {
  quantity: number;
  ingredients: Record<string, number>;
}

export interface ItemRecipes {
  default: Recipe;
  alternate?: Recipe[];
}

export interface Item {
  display_name: string;
  icon_url: string;
  recipe: ItemRecipes;
}