import React, { Component } from 'react'
import Observacoes from './Observacoes';

export default class Form extends Component {
  constructor() {
    super()

    this.state={
      sabores: 'Creme com passas',
      bolas: 0,
      cobertura: false,
      observacoes: '',
    }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox'? target.checked: target.value
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div>
        <form className="form">
          <fieldset>
          <label htmlFor="sabores">Sabores:</label>
          <select 
          name="sabores" id="sabores" 
          value={this.state.observacoes}
          onChange={this.handleChange}>
            <option value="creme com passas">Creme com passas</option>
            <option value="chocomenta">Chocomenta</option>
            <option value="chiclete">Chiclete</option>
          </select>
          </fieldset>
          <label htmlFor="bolas">Quantidade de bolas:</label>
          <input 
          type="number" 
          name="bolas"
          id="bolas"
          min="1" max="5"
          value={this.state.observacoes}
          onChange={this.handleChange} />
          <label htmlFor="cobertura">Cobertura?</label>
          <input 
          type="checkbox" 
          name="cobertura" id="cobertura" 
          value={this.state.observacoes}
          onChange={this.handleChange} />
          <Observacoes value={this.state.observacoes} handleChange={this.handleChange}/>
          <input
          type="file"
          value={this.state.observacoes}
          onChange={this.handleChange} />
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    )
  }
}
