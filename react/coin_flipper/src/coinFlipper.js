import React,{Component} from 'react';
import choice from './choice';
import Coin from './coin';

class coinFlipper extends Component{
    static defaultProps = {
        coin:[
            {side:"heads", imgsrc:"https://i.pinimg.com/originals/db/4a/2c/db4a2c8fc3ed3f0ba7ce0f7f12703cd0.jpg"},
            {side:"tails", imgsrc:"https://www.orissapost.com/wp-content/uploads/2020/09/Here%E2%80%99s-what-the-symbols-on-Indian-coins-below-the-year-mean-1.jpg"}
        ]
    };
    constructor(props){
        super(props)
        this.state={
            currcoin : null,
            nFlips : 0,
            nHeads : 0,
            nTails : 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        const newcoin = choice(this.props.coin);
        this.setState(st => {
            return{
                currcoin : newcoin,
                nFlips : st.nFlips + 1,
                nHeads : st.nHeads + (newcoin.side ==='heads'?1:0),
                nTails : st.nTails + (newcoin.side ==='tails'?1:0)
            };
        });
    }
    render(){
        return(
            <div className= 'coinFlipper'>
                <h2>let's Flip A Coin</h2>
                {this.state.currcoin && <Coin info={this.state.currcoin}/>}
                <button onClick = {this.handleClick}>Flip Me!</button>
            </div>
        )
    }
}

export default coinFlipper;
