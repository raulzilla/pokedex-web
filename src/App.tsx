import { useEffect, useState, useRef } from 'react';
import { Box, Paper, TextField } from '@mui/material'
import { api } from './services/api'
import './App.css'

function App() {

  const [ pokemon, setPokemon ] = useState<any>({})

  useEffect(() => {
    api
    .get('/pokemon/rayquaza')
    .then(res => setPokemon(res.data))
    .catch(err => {
      console.log("Falha na api" + err);
    })
  }, [])

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
            <h4>{pokemon?.name}</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`} />
            <p>
              <TextField onChange={(e) => console.log(e.target.value)} label="Pokemon" />
            </p>
          </Box>
        </Paper>
      </header>
    </div>
  );
}

export default App;

