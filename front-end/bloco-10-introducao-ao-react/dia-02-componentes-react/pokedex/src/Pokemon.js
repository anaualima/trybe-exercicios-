import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
    render() {
    const {name, type, averageWeight, image} = this.props

        return pokemons.map((p) => {
            return(
                <li>
                <h2>{p.name}</h2>
                <p>{p.type}</p>
                <p>{p.averageWeight.value}{p.averageWeight.measurementUnit}</p>
                <div>
                    <img src={p.image} alt=''/>
                </div>
                </li>
            )
        });
    }
}

export default Pokemon


// // return (<span>{name} {type} {averageWeight}</span>)