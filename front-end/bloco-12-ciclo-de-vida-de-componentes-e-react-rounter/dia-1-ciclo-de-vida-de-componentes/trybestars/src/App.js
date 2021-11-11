import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Timer from './components/Timer';


export default class App extends Component {
  constructor() {
    super()
    this.state ={
      showTimer: true,
    }
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState((prevState)=> ({
      showTimer: !prevState.showTimer,
    }))
  }

  render() {
    const { showTimer } = this.state
    return (
      <div>
        <Header />
        {showTimer? <Timer /> : null}
        <button onClick={this.toggleTimer}>
          {showTimer? 'ESCONDER TIMER' : 'MOSTRAR TIMER'}
        </button>
      </div>
    )
  }
}
