import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

            </div>
        </div>
    )
}

export default Card
