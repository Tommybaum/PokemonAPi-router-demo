import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllPokemon from './pokemonLIst'
import PokemonList from './pokemonLIst'
import PokemonDetail from './PokemonDetail'
const Poke_API = `https://pokeapi.co/api/v2/pokemon/`
function App() {


  return (
    <>
    <h1>Pokemon</h1>
    <Routes>
      <Route path='/' element={<PokemonList />} />
      <Route path='/pokemon/:pokemonName' element={<PokemonDetail />}/>
    </Routes>
    </>
  )
}

export default App
