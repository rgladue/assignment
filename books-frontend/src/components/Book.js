const Book = (props) => {
  const { task, done, updateBook, deleteBook } = props;
  
  const handleUpdate = () => {
    updateBook();
  }

  const handleRemove = () => {
    deleteBook()
  }

  const classStatus = done ? "completed" : ""

  return (
    <div className="book">
      <p>{props.name}</p>
      <p>{props.author}</p>
      <button onClick={handleUpdate}>Update</button>
      <button className={'delete'} onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default Book;