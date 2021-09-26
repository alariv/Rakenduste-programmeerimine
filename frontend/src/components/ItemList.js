import Item from '../components/Item';

function ItemList(props) {
  return(<div className="item">
    {props.items.map(item=> (
     <Item 
      key={item.id} 
      name={item.name} 
      price={item.price}
      category={JSON.parse(item.category).name}
      type={JSON.parse(item.category).category}/>
    ))}
  </div>);
}

export default ItemList;