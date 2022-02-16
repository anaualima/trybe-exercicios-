import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <p>About: sitezinho</p>
                <Link to="/">Voltar a Home</Link>
            </div>
        )
    }
}
