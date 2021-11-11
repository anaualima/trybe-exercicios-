import React, { Component } from 'react'

export default class Timer extends Component {
    constructor (){
        super()
        this.state = {
          seconds: 5,
        }
    }
    render() {
        const { seconds } = this.state
        return (
            <section>
                <h2>{seconds}</h2>
            </section>
        )
    }
}
