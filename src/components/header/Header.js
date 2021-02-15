import React, { Component } from 'react'
import Modal from '../Modal'

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showModal: false
        }
    }
    
    
    toggleModal = () =>{
        
        this.setState((prevState) =>{
            console.log(prevState.showModal)
            return {showModal: !prevState.showModal}
        })
    }
    
    render() {
        return (
            <header>
                <div className="logo"><h1>Minecraft Memory Game</h1></div>
                <button className='instructions btn btn-success' onClick={this.toggleModal}>How to play</button>
            
                {
                    this.state.showModal ? (
                        <Modal onClose={this.toggleModal}>
                            <React.Fragment>
                                There are twenty total unique minecraft blocks. The objective is to click each block once. However, with each click, the blocks displayed will be shuffled.

                            </React.Fragment>

                        </Modal>
                    ) : null
                }
                
            </header>
        )
    }
}

export default Header
