function Item(props) {
  return (
    <div className="itemDetails">
      <div className="itemName">{props.name}</div>
      <div className="itemPrice">{props.price} €</div>
      <div className="itemCategory">{props.category}</div>
      <div className="itemCategoryType">{props.type}</div>
    </div>
  )
}

export default Item;