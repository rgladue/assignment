import { useState } from 'react';

const NewBookForm = (props) => {
  const { addBook } = props;
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addBook(value).then(res => {
      setValue("")
    });
  }

  return (
    <form className={'book-form'} onSubmit={handleSubmit}>
      <label>Add Another Book??</label>
      <input name="book" value={value} onChange={handleChange} placeholder="write it here"/>
      <button type={"submit"}>Add Book</button>
    </form>
  )
}

export default NewBookForm;