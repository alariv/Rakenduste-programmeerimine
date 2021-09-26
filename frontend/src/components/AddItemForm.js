import './AddItemForm.css';
import { useRef, useState, useEffect } from 'react';

function AddItemForm(props) {
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  let [categoryOptions,setCategoryOptions]=useState([]);
  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const priceValue = priceInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;
    const item = {
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }
    props.onAddItem(item);
  }
  useEffect(()=>{
    fetch('http://localhost:8080/categories',{
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
    }).then(( data => data.json())).then((resp) => {
      console.log(resp);
      let categories=[...categoryOptions];
      resp.map((row) =>{
        categories.push(<option key={row.id} value={JSON.stringify({name:row.name,category:row.category})}>{row.name} ({row.category})</option>);
      })
      setCategoryOptions(categories);
      // setCategoryOptions(categoryOptions+test);
      console.log(categoryOptions);
    })
  },[])


  return (
    <form onSubmit={formSubmitHandler}>
      <label>Eseme nimi</label><br />
      <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
      <label>Eseme hind</label><br />
      <input type="number" required ref={priceInputRef} /><br />
      <label>Eseme kategooria</label><br />
      <select ref={categoryInputRef}>
        {categoryOptions}
      </select>
      <br /><br />
      <button>Sisesta uus ese</button>
    </form>
  );
}

export default AddItemForm;