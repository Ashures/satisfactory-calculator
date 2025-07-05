import type { ItemInfo } from "../../libs/types";
import Item from "./Item";

interface ItemListProps {
  items: [string, ItemInfo][];
  selectItem: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = (props) => {
  return (
    <div className="item-list">
      {props.items.map(item => {
        const [key, value] = item;
        return (
          <button key={key} onClick={() => props.selectItem(value.id)}>
            <Item 
              id={value.id} 
              displayName={value.displayName} 
              iconUrl={value.iconUrl} 
              recipe={value.recipe}
            />
          </button>
        )})}
    </div>
  );
};

export default ItemList;