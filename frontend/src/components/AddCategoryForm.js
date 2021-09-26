import './AddItemForm.css';
import { useRef } from 'react';

function AddCategoryForm(props) {
  const nameInputRef = useRef();
  const categoryInputRef = useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;
    const item = {
      name: nameValue,
      category: categoryValue
    }
    props.onAddItem(item);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Kategooria nimi</label><br />
      <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
      <label>Kategooria tüüp</label><br />
      <select type="text" required ref={categoryInputRef}>
        <option>BASIC</option>
        <option>PREMIUM</option>
        <option>DELUXE</option>
      </select><br /><br />
      <button>Salvesta</button>
    </form>
  );
}

export default AddCategoryForm;