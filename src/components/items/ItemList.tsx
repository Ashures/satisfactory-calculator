import items from "../../libs/items";
import Item from "./Item";

const ItemList: React.FC = () => {
  return (
    <div className="item-list">
      {Object.entries(items).map(item => {
        const [key, value] = item;
        return (
          <Item 
            key={key} 
            id={value.id} 
            displayName={value.displayName} 
            iconUrl={value.iconUrl} 
            recipe={value.recipe}
          />
        )})}
    </div>
  );
};

export default ItemList;