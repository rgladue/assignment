import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookData = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(axios.get(`localhost:4000/books`))
      .then(res => {
       setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const updateBook = (id) => {
    return axios.patch(`/books/${id}`)
      .then(res => {
        console.log(res);
        // const index = books.findIndex(book => book.id === id);
        // const selectedBook = books.find(book => book.id === id);
        // const updatedBook = {...selectedBook, done: !selectedBook.done}
        // const updatedBooks = [...books.slice(0, index), updatedBook, ...books.slice(index + 1)]
        // setBooks(updatedBooks);
      })
  }

  const deleteBook = (id) => {
    const updatedArray = books.filter((book) => book.id !== id);
    console.log('id is', id)
    console.log(books)
    return axios.delete(`/books/${id}`)
      .then(res => {
        console.log(res);
        setBooks(updatedArray);
      })
  }

  const addBook = (bookValue) => {
    return axios.post("/books", {task: bookValue})
      .then(res => {
        console.log(res)
        setBooks(res.data);
      })
  }

 

  return {books, updateBook, addBook, deleteBook}
}

export default useBookData;