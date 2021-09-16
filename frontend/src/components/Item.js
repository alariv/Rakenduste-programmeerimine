

function Item(props) {
  
  return (
    <div className="itemCont">
        <div className="itemName">
        Nimi: { props.name }
        </div>
        <div className="itemPrice">
        Hind: {props.price}
        </div>
        <div className="itemCategory">
        {props.category}
        </div>
    </div>
  );
}

export default Item;
