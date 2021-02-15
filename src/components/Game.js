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
    handleClick = (id) =>{

        this.state.blocks.forEach( obj => {
            if (id === obj.id &&   obj.clicked === false){
                obj.clicked = true;
            }
        })
        // console.log(clickedBefore);
        // if (clickedBefore){
        //     this.updateGame()
        //     alert("You Lost")
            
        // } else {
        //     this.updateGame()
        // }
    }
    updateGame = () => {
        const newArray = this.shuffle(this.state.blocks);
        this.setState((prevState) => {
            return {
                currentScore: prevState.currentScore+1,
                personalBest: prevState.personalBest,
                blocks: newArray
            }

        })
    }
    shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    render() {
        
        console.log("RenderMethod Called")
        let blockCards = blocks.map((obj)=>{
            
            return (
                <Card key={obj.id} image={obj.image} name={obj.name} handleClick={this.handleClick}/>
            )
        });

        // blockCards.forEach( obj => console.log(obj))

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
