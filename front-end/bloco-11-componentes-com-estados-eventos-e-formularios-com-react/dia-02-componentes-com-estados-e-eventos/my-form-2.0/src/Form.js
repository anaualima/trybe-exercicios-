import React, { Component } from 'react'


const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
}
export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleonBlur.bind(this);
    this.handleChange = this.updateState.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target

    if (name === 'endereco') value = this.regexvalidate(value);
    this.updateState(name, value)
  }

  regexvalidate = endereco => endereco.replace(/[^\w\s]/gi, '') //replace REMOVE os caracteres não desejados

  handleonBlur({ target }) {
    let { name, value } = target

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value; //match VERIFICA
    this.setState({ [name]: value})
  }

  updateState(name, value) {
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div>
        <form className="form">
          <fieldset>
            <label htmlFor="nome">Nome:</label>
            <input
              className="uppercase"
              name="nome"
              id="nome"
              type="text"
              min="1" max="40"
              required />
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              id="email"
              type="email"
              min="1" max="50"
              required />
            <label htmlFor="endereco">Endereço:</label>
            <input
              name="endereco"
              id="endereco"
              type="text"
              min="1" max="11"
              value={this.state.endereco}
              onChange={this.handleChange}
              required />
            <label htmlFor="cidade">Cidade:</label>
            <input
              name="cidade"
              id="cidade"
              type="text"
              min="1" max="28"
              className="blur"
              value={this.state.cidade}
              onChange={this.handleChange}
              required />
          </fieldset>
        </form>
      </div>
    )
  }
}
