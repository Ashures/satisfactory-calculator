import items from "../../libs/items";
import ItemList from "./ItemList";
import type { ItemInfo } from "../../libs/types";
import { useMemo, useState } from "react";
import Item from "./Item";
import { toTitleCase } from "../../libs/formatting";

interface SelectedItemListProps {
  items: string[];
  deselectItem: (id: string) => void;
}

const SelectedItems: React.FC<SelectedItemListProps> = (props) => {
  const currentItems: [string, ItemInfo][] = Object.entries(items).filter((item) => props.items.includes(item[0]));
  const resources = useMemo<Record<string, number>>(() => {
    const calculateMaterials = (resourcesNeeded: Record<string, number>, id: string, quantity: number) => {
      Object.entries(items[id].recipe.default.ingredients).forEach(ingredient => {
        const [ingredient_id, ingredient_quantity] = ingredient;
        const ingredientsNeeded = Math.ceil(ingredient_quantity * (quantity / items[id].recipe.default.quantity));
        resourcesNeeded[ingredient_id] ? resourcesNeeded[ingredient_id] += ingredientsNeeded : resourcesNeeded[ingredient_id] = ingredientsNeeded;

        if (items[ingredient_id]) calculateMaterials(resourcesNeeded, ingredient_id, ingredientsNeeded);
      });
    };

    const resourcesNeeded: Record<string, number> = {};
    currentItems.forEach((item) => calculateMaterials(resourcesNeeded, item[0], 1));
    return resourcesNeeded;
  }, [currentItems]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  

  return (
    <div className="selected-items-menu">
      <ul className="menu-tabs">
        <li className={`${currentTab === 0 ? 'selected-tab' : ''}`}><button onClick={() => setCurrentTab(0)}>Items</button></li>
        <li className={`${currentTab === 1 ? 'selected-tab' : ''}`}><button onClick={() => setCurrentTab(1)}>Resources</button></li>
      </ul>
      {currentTab === 0 &&
        <div className="selected-items">
          {props.items.length > 0 
          ?
            <ItemList
              items={currentItems}
              selectItem={props.deselectItem}
            />
          :
            <h1>No items selected.</h1>
          }
        </div>
      }
      {currentTab === 1 &&
        <div className="selected-resources">
          {props.items.length > 0
          ?
            <div className="resource-list">
              {Object.entries(resources).map(resource => {
                const [id, quantity] = resource;
                return (
                  <div key={id} className="resource">
                    <Item
                      id={id}
                      displayName={toTitleCase(id)}
                      iconUrl={`${id}.webp`}
                      clickable={false}
                    />
                    <h2>x {quantity}</h2>
                  </div>
                );
              })}
            </div>
          :
            <h1>No items selected.</h1>
          }
          
        </div>
      }
    </div>
  );
};

export default SelectedItems;