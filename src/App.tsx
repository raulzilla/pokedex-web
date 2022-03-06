import { Fragment, useState } from 'react';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import axios from 'axios';
import './App.css'

function App() {
  const [ pokemon, setPokemon ] = useState<any>({})

  const Request = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(res => {
        const pokemons = res.data;
        console.log(pokemons)
        setPokemon({ pokemons });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={3}>
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: 'white',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            {/* {pokemon.pokemons.map((pokemons: any) =>
              <Fragment>
                <h4>{pokemons.name}</h4>
              </Fragment> 
            )} */}
            <h4>Pikachu</h4>
            <p>n 25</p>
            <p>raio</p>
            <p>Fraquezas</p>
          </Box>
        </Paper>
        <button onClick={Request}>test</button>
      </header>
    </div>
  );
}

export default App;

