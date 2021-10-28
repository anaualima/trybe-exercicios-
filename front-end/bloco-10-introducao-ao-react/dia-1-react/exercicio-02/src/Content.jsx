import React from "react"

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

const listaConteudos = conteudos.map((c, i) => {
   return  <li key = {i}>
    O conteúdo é: {c.conteudo}, 
    Status: {c.status}, 
    Bloco: {c.bloco}</li>
})

class Content extends React.Component {
    render() {
        return <ul>{listaConteudos}</ul>
    }
}

export default Content