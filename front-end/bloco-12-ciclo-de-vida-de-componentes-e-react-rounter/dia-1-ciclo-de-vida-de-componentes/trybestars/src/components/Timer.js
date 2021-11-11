import React, { Component } from 'react';
const secondsChange = 1000;
const timeLimit = 5;

export default class Timer extends Component {
    constructor (){
        super()
        this.state = {
          seconds: 1,
          phases: ['INSPIRE...', 'SEGURE...', 'EXPIRE...'],
          currentPhase: 0,
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds+1,
            }))
        }, secondsChange)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.seconds === timeLimit){
            this.setState({
                seconds: 1,
                currentPhase: prevState.currentPhase === 2? 0 : prevState.currentPhase+1,
            })
        }
    }

    componentWillUnmount() {  // DESMONTA O COMPONENTE;
        clearInterval(this.intervalId); 
    }

    render() {
        const { seconds, phases, currentPhase } = this.state
        return (
            <section>
                <h1>{phases[currentPhase]}</h1>
                <h2>{seconds}</h2>
            </section>
        )
    }
}
