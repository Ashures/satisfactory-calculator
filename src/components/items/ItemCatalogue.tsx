import items from "../../libs/items";
import ItemList from "./ItemList";

interface ItemListProps {
  selectItem: (id: string) => void;
}

const ItemCatalogue: React.FC<ItemListProps> = (props) => {
  return (
    <div className="item-catalogue">
      <ItemList
        items={Object.entries(items)}
        selectItem={props.selectItem}
      />
    </div>
  );
};

export default ItemCatalogue;