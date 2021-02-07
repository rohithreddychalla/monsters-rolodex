import React, {Component} from 'react';
import Lottery from './lottery' ;
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
         <Lottery/>
         <Lottery title='big sur 4' ballNum={4}/>
      </div>
    )
  }

}
 

export default App;
