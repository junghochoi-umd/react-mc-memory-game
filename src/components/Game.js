import React, { Component } from 'react'
import Score from './Score'
import Card from './Card'
import blocks from '../Assets/json/blocks.json'
export class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentScore: 0,
            personalBest: 0,
            blocks: blocks
            
        }
    }
    
    shuffle = () => {

    }
    render() {

        let blockCards = blocks.map((obj)=>{
            return (
                <Card key={obj.id} image={obj.image} name={obj.name}/>
            )
        });

        return (
            
            <div id="game">
                <Score></Score>
                <div className="content">
                     {blockCards}
                </div>

                <button onClick={this.shuffle}>Shuffle</button>
            </div>
        )
    }
}

export default Game
