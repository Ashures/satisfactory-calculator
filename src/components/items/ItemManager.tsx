import { useState } from "react";
import ItemCatalogue from "./ItemCatalogue";
import SelectedItems from "./SelectedItems";

const ItemManager: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const selectItem = (id: string) => {
    if (!selectedItems.includes(id))
      setSelectedItems(prev => [...prev, id])
  };

  const deselectItem = (id: string) => {
    if (selectedItems.includes(id))
      setSelectedItems(prev => prev.filter(item => item !== id))
  };

  return (
    <div className="item-manager">
      <ItemCatalogue selectItem={selectItem} />
      <SelectedItems items={selectedItems} deselectItem={deselectItem} />
    </div>
  );
};

export default ItemManager;