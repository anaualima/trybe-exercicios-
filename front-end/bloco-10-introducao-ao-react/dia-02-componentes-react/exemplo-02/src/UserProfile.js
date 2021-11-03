import React, { Component } from 'react'

class UserProfile extends Component {
    render() {

            const {name, email, id} = this.props
    
        return <span>{name} {email} {id}</span>
    }
}

export default UserProfile
