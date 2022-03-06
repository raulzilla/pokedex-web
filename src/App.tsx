import { useEffect, useState } from 'react';
import { Box, Paper, TextField, Button, Snackbar, Alert } from '@mui/material'
import { api } from './services/api'
import './App.css'

function App() {

  const [ pokemon, setPokemon ] = useState<any>({})
  const [ initialPokemon, setInitialPokemon ] = useState('bulbasaur')
  const [ err, setErr ] = useState(false)

  useEffect(() => {
    api
    .get(`/pokemon/${initialPokemon}`)
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
            <div>
              <TextField onChange={e => setInitialPokemon(e.target.value)} label="Pokemon" focused />
            </div>
            <br />
            <Button 
              onClick={() => {
                api
                .get(`/pokemon/${initialPokemon.toLowerCase()}`)
                .then(res => setPokemon(res.data))
                .catch(() => {
                  setErr(err === true)
                })
              }}
              variant="outlined"  
              color="success"
            >
              Enviar
            </Button>
          </Box>
        </Paper>
      </header>
    </div>
  );
}

export default App;

