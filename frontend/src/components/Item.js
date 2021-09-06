function Item(props) {
  return (
    <div clcassName="item">
        <div clcassName="itemName">
        Nimi: {props.name}
        </div>
        <div className="itemPrice">
        Hind: {props.price}
        </div>
        <div className="itemCategory">
        <strong>{props.category}</strong>
        </div>
    </div>
  );
}

export default Item;
