import {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('http://localhost:4000/books')
    .then((data) => {
      console.log('yahoo',data);
    })
    .catch((err) => {
      console.log('aww',err);
    })
  })

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
