import { useEffect, useState } from 'react';
import { Box, Paper, TextField, Button } from '@mui/material'
import { api } from './services/api'
import './App.css'

function App() {

  const [ pokemon, setPokemon ] = useState<any>({})
  const [ initialPokemon, setInitialPokemon ] = useState('bulbasaur')
  const [ err, setErr ] = useState(false)

  const request = () => {
    api
    .get(`/pokemon/${initialPokemon.toLowerCase()}`)
    .then(res => {
      setPokemon(res.data)
      console.log(res.data)
    })
    .catch(() => {
      setErr(err === true)
    })
  }

  useEffect(() => {
    request()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={5}>
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: 'white'
            }}
          >
            {!pokemon?.name && <h4>Bulbasaur</h4>}
            <h4 className='text'>{pokemon?.name}</h4>
            <img className='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id ? pokemon?.id : 1}.png`} />
            <div>
              <TextField color="secondary" onChange={e => setInitialPokemon(e.target.value)} label="Pokemon" focused />
            </div>
            <br />
            <Button
              color="secondary"
              onClick={() => {request()}}
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

