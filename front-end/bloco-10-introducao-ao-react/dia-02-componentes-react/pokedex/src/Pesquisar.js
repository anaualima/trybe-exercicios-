import React from "react";
import Pokemon from "./Pokemon";




class Pesquisar extends React.Component {
    render() {
    const botao = document.querySelector('.botao');
    const search = document.querySelector('.search')
    const namePokemon = botao.addEventListener('click', (event) => {
        event.preventDefault();
        return search.value
    })
    const objPokemon = (Pokemon.find((p) => p.name === namePokemon));
  
    return (
    <>
    <li>{objPokemon}</li>
    </>
    )
    }
}

export default Pesquisar