interface ItemProps {
  id: string;
  displayName: string;
  iconUrl: string;
  clickable: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const { id, displayName, iconUrl } = props;
  return (
    <div className={`item${props.clickable ? ' clickable' : ''}`} id={id}>
      <h2>{displayName}</h2>
      <img src={`/images/items/${iconUrl}`} alt="" />
    </div>
  );
};

export default Item;