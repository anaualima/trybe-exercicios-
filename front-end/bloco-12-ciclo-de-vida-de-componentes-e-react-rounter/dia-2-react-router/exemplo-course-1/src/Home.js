import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/about">About</Link>
                <h1>Minha homepage!</h1>
            </div>
        )
    }
}
