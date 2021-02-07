import React, {Component} from 'react';
import Circles from './circles';
import './lottery.css';

class Lottery extends Component{
    static defaultProps = {
        title: 'lottery',
            ballNum: 6,
            maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {nums:Array.from({length: this.props.ballNum}) };
        this.handleClick = this.handleClick.bind(this);
    }
    total(){
        this.setState(curstate => ({
         nums: curstate.nums.map(
             n =>  Math.floor(Math.random()*this.props.maxNum)+1
            )
        }));
    }
    handleClick(){
        this.total();
    }
    render(){
        return(
            <div className="container">
                <section className='lottery' >
                    <h1>{this.props.title}</h1>
                    <div>
                        {this.state.nums.map(
                            n=> (<Circles num={n}/>) 
                        )}
                    </div>
                </section>
                <button onClick={this.handleClick}>Generate!</button>
            </div>
        )
    }
}

export default Lottery;