import React, { Component } from 'react'

export class Card extends Component {
    
    constructor(props) {
        super(props)
    

    }

    render() {
        return (
        <div className="card" onClick={this.cardClick}>
            <img className="card-img-top" src={this.props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>

            </div>
        </div>
        )
    }
}

export default Card


/*
import React from 'react'

function Card(props) {
    return (
        <div className="card" onClick={props.handleClick()}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

            </div>
        </div>
    )
}

export default Card
*/
