import React,{Component} from 'react';
import {CardList} from './components/cardlist';
import {Search} from './components/search';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state= {
      monsters : [],
      searchField:''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=> this.setState({monsters:users}));
  }

  onSearchChange = (e)=>{
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return(
      <div className="App">
      <h1>MONSTERS ROLODEX</h1>
      <Search placeholder='search the monster'
       handleChange = {this.onSearchChange}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
