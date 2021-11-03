// import React from 'react'
// import './App.css';

// const Task = (value) => {
//   const valor = [<li>Observar</li>, <li>Escrever</li>, <li>Refletir</li>, <li>Criticar</li>];
//   value = valor.map((v) => v);
//   return (
//     <ul>{value}</ul>
//   );
// }

// function App() {
//   return (<Task/>);
// }

// export default App;


import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map((t) => Task(t)) }</ul>
    );
  }
}

export default App;
