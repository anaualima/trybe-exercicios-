import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (<>
  <section className='basic'>
  <input type='text' className='search'></input>
  <button type='submit' className='botaos'>Search</button>
  </section>
  <section>
  <h1>Pokedex</h1>
  <ul>
    {pokemons.map((p) => {
     return <Pokemon data={p}/>
      
    })}
  </ul>
  </section>
  </>)
}

export default App;
