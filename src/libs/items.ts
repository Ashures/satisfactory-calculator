import type { ItemInfo, ItemRecipes } from "./types";

const itemRecipes = import.meta.glob('../data/recipes/*.json', {eager: true});
const items: Record<string, ItemInfo> = {};

const toTitleCase = (str: string): string => {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1, str.length)}`
};

for (const path in itemRecipes) {
  const itemId: string = path.split('/').pop()!.replace('.json', ''); // e.g., '../data/recipes/iron_ingot.json' -> ['..', 'data', 'recipes', 'iron_ingot.json'] -> 'iron_ingot.json' -> 'iron_ingot'
  const itemName: string = toTitleCase(itemId.split('-').reduce((acc, curr) => acc + toTitleCase(curr))).trim(); // e.g., 'iron_ingot' -> ['iron', 'ingot'] -> 'Iron Ingot'
  
  const recipeModule = itemRecipes[path] as { default: ItemRecipes };
  
  items[itemId] = {
    id: itemId,
    displayName: itemName,
    iconUrl: `${itemId}.webp`,
    recipe: recipeModule.default,
  };
}

export default items;