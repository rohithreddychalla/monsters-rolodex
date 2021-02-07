import React,{Component} from 'react';
import './coin.css';

class coin extends Component{
    render(){
        return(
            <div className='coin'>
                <img alt={this.props.info.side} src={this.props.info.imgsrc}/>
            </div>
        )
    }
}

export default coin;