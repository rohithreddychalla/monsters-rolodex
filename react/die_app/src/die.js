import React, {Component} from 'react';
import './die.css';

class Die extends Component{
    render(){
        return (
        <i className = {`die fas fa-dice-${this.props.face}`}/>
        );
    }
}

export default Die;