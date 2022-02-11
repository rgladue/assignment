var express = require('express');
var router = express.Router();



const books = [
  {
    name: 'The Hobbit',
    author: 'J.R.R Tokien',
    yearOfPublishing: 1937,
    ISBN: 9780044403371,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rif.org%2Fliteracy-central%2Fbook%2Fhobbit&psig=AOvVaw0bAj416L1cGLW5_5ET-mYX&ust=1644589840572000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiT_9us9fUCFQAAAAAdAAAAABAN'
  },
  {
    name: 'Harry Potter And The Chamber of Secrets',
    author: 'J.K. Rowling',
    yearOfPublishing: 1998,
    ISBN: 979823489391,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHarry_Potter_and_the_Chamber_of_Secrets&psig=AOvVaw1lCMCThDEwiYIp5636CPrF&ust=1644589979746000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjFsp6t9fUCFQAAAAAdAAAAABAI'
  }
];

 
/* GET users listing. */
module.exports = (db) => {
  // get books at page load
  router.get('/', (req, res) => {
      res.json(books);
  });

  // add a new book
  router.post('/books', (req, res) => {
    const { task } = req.body;
    console.log(req.body)
    const newBook = {
      id: uniqid(),
      task,
      done: false
    };

    books.push(newBook);
    console.log(books)
    res.json(newBook);
  });

  // update a book 
  router.patch('/books/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const selectedTask = books.find(book => book.id == id);
    selectedTask.done = !selectedTask.done;
    res.json(selectedTask)
  });

  // remove a book
  router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id == id )
    if(index === -1) {
      return res.json({message: 'no book with that id'});
    };

    books.splice(index, 1);
    res.json({message: 'book successfully deleted'})
  });


  return router;
}
