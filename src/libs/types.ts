export interface Recipe {
  quantity: number;
  ingredients: Record<string, number>;
}

export interface ItemRecipes {
  default: Recipe;
  alternate?: Recipe[];
}

export interface ItemInfo {
  id: string;
  displayName: string;
  iconUrl: string;
  recipe: ItemRecipes;
}