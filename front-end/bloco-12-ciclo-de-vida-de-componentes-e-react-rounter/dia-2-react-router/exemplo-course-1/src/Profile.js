import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <p>Profile: {this.props.name}</p>
            </div>
        )
    }
}
