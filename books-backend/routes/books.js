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

  router.get('/', (req, res) => {
      res.json(books);
  });

  return router;
}
