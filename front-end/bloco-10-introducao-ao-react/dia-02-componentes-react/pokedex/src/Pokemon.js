import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { data: {name, type, averageWeight, image} } = this.props

        return (
            <li>
                <h2>{name}</h2>
                <p>{type}</p>
                <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
                <div>
                    <img src={image} alt='' />
                </div>
            </li>
        )
    }
}

export default Pokemon


// // return (<span>{name} {type} {averageWeight}</span>)