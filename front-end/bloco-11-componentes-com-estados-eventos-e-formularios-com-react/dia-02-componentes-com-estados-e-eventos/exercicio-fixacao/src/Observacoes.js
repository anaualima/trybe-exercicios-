import React, { Component } from 'react'

export default class Observacoes extends Component {
  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="observacoes">Observações, quer tirar ou acrescentar algo?</label>
        <textarea
          name="observacoes"
          id="observacoes"
          rows="4"
          cols="50"
          value={value}
          onChange={handleChange} />
      </div>
    )
  }
}
