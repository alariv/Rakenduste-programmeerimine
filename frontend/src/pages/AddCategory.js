import AddCategoryForm from '../components/AddCategoryForm'
import { useState} from 'react'

function AddCategory() {
    const [isSaved, setIsSaved]=useState(0); 
    function itemSubmitHandler(item) {
        fetch('http://localhost:8080/categories',{
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
            <h1>Lisa uus kategooria</h1>
            {isSaved && <div className="isSaved">Salvestatud!</div>}
            <AddCategoryForm onAddItem={itemSubmitHandler}/>
        </div>
    );
}

export default AddCategory;