import React, {Component} from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');



export class Modal extends Component {
    render(){
        return createPortal(
            <div className='modal-bg'>

             
                <div className='modal-box'>
                    <h1 className='title'>Instructions</h1>
                    <p className='modal-message'>
                        {this.props.children}
                    </p>
                    <hr />
                    <button className="btn btn-primary" onClick={this.props.onClose}>Close</button>
                </div>
            </div>
            , 
            modalRoot
        )
    }
    
}

export default Modal
