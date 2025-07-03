import type { ItemInfo } from "../../libs/types";

const Item: React.FC<ItemInfo> = (props) => {
  const { id, displayName, iconUrl } = props;
  return (
    <div className="item" id={id}>
      <h2>{displayName}</h2>
      <img src={`/images/items/${iconUrl}`} alt="" />
    </div>
  );
};

export default Item;