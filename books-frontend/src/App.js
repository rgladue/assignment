import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books')
    .then((res) => {
      setBooks(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


const results = books.map((book) => {
  <p>{book.author}</p>
})


  return (
    <div className="App">
      <h1>Authors:</h1>
     
    </div>
  );
}

export default App;
