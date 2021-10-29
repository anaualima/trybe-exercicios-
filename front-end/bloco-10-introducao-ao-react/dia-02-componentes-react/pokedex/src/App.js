import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (<>
  <h1>Pokedex!</h1>
  <ul>
  <Pokemon data={pokemons}/>
  </ul>
  </>)
}

export default App;
