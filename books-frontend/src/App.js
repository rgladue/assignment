import './App.css';
import Book from './components/Book';
import NewBookForm from './components/NewBookForm';
import useBookData from './hooks/useBookData';

function App() {
  const { books, updateBook, addBook, deleteBook } = useBookData();

  

  const bookItems = books.map(book => {
    
      return(<Book key={book.id} 
        name={book.name}
        author={book.author}
        updateBook={() => updateBook(book.id)}
        deleteBook={() => deleteBook(book.id)}
      />
      )
  })



  return (
    <div className="App">
      <h1>Books Listings</h1>
      <NewBookForm addBook={addBook}/>
      <section className={'books'}>
        {bookItems}
      </section>
    </div>
  );
}

export default App;
