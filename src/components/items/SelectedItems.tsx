import items from "../../libs/items";
import ItemList from "./ItemList";

interface SelectedItemListProps {
  items: string[];
  deselectItem: (id: string) => void;
}

const SelectedItems: React.FC<SelectedItemListProps> = (props) => {
  return (
    <div className="selected-items">
      {props.items.length > 0 
      ?
        <ItemList
          items={Object.entries(items).filter(item => props.items.includes(item[0]))}
          selectItem={props.deselectItem}
        />
      :
        <h1>No items selected.</h1>
      }
    </div>
  );
};

export default SelectedItems;