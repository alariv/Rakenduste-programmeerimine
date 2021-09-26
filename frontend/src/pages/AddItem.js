import AddItemForm from '../components/AddItemForm'
import { useState} from 'react'

function AddItem() {
  const [isSaved, setIsSaved]=useState(0);  
  function itemSubmitHandler(item) {
    fetch('http://localhost:8080/items',{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(() => {
      setIsSaved(1)
    });
  }

  



  return (
    <div>
      <h1>Lisa uus ese</h1>
      {isSaved && <div className="isSaved">Salvestatud!</div>}
      <AddItemForm onAddItem={itemSubmitHandler} />
    </div>
    );
}

export default AddItem;