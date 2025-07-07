import { toTitleCase } from "./formatting";
import type { ItemInfo, ItemRecipes } from "./types";

const itemRecipes = import.meta.glob('../data/recipes/*.json', {eager: true});
const items: Record<string, ItemInfo> = {};

for (const path in itemRecipes) {
  const itemId: string = path.split('/').pop()!.replace('.json', ''); // e.g., '../data/recipes/iron_ingot.json' -> ['..', 'data', 'recipes', 'iron_ingot.json'] -> 'iron_ingot.json' -> 'iron_ingot'
  const itemName: string = toTitleCase(itemId); // e.g., 'iron_ingot' -> ['iron', 'ingot'] -> 'Iron Ingot'
  
  const recipeModule = itemRecipes[path] as { default: ItemRecipes };
  
  items[itemId] = {
    id: itemId,
    displayName: itemName,
    iconUrl: `${itemId}.webp`,
    recipe: recipeModule.default,
  };
}

export default items;