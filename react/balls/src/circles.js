import React, {Component} from 'react';
import './circles.css';

class Circles extends Component{
    render(){
        return <div className='circles'>{this.props.num}</div>
    }
}

export default Circles;
