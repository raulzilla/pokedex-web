import axios from 'axios';



axios.get('https://pokeapi.co/api/v2/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })