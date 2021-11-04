import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      id: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      text:event.target.value
    })
  }

  handleClick(event) {
    this.setState({
      id:event.target.value
    })
  }

  render() {
    console.log(pokemons)
    return (
      <div>
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
        <div>
          <Pokedex pokemons={pokemons.filter((p) => p.type === this.state.text)} />
        </div>
        <button onClick={this.handleChange} className="button-type" value="Fire">Fire</button>
        <button onClick={this.handleChange} className="button-type" value="Psychic">Psychic</button>
        <button onClick={this.handleClick} className="button-next" value={this.state.id}>Próximo</button>
      </div>
    )
  }
}

export default App;
