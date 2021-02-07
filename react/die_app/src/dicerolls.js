import React, {Component} from 'react';
import Die from './die';
import './dicerolls.css';

class Dicerolls extends Component{
    static defaultProps = {
        sides : ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props){
        super(props);
        this.state = {die1:'one', die2:'one', rolling:false}
        this.rolls = this.rolls.bind(this);
    };
    rolls(){
        const newDie1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        this.setState({die1 : newDie1});
        this.setState({die2 : newDie2});
        this.setState({rolling:true});
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)

    };
    render(){
        return(
            <div className="rollDice">
                <div className='rolldice-container'>
                     <Die face = {this.state.die1}/>
                     <Die face = {this.state.die2}/>
                </div>
               <button onClick = {this.rolls} disabled={this.state.rolling}>
                   {this.state.rolling ? 'Rolling...' : 'Roll!'}
               </button>
            </div>
            
        );
    }
}

export default Dicerolls; 