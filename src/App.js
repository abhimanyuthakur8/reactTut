import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {id : '1', name : 'max', age:28},
      {id : '3',name : 'manu', age:29},
      {id : '2',name : 'maxy', age:26}
    ],
    showPerson: false
  }


switchNameHandler = () =>{
  this.setState({
    person : [
      {name : 'maxilation', age:28},
      {name : 'mana ', age:29},
      {name : 'maxy', age:28}
    ]
  })
}

nameChangeHandler = (event) =>{
  this.setState({
    person : [
      {name : 'maxilation', age:28},
      {name : event.target.value, age:29},
      {name : 'maxy', age:28}
    ]
  })
}

togglePersonHandler =() =>{
  const doesShow = this.state.showPerson;
  this.setState({showPerson:!doesShow});
}

deletePerson = (personIndex) => {
  const person = [...this.state.person];
  person.splice(personIndex, 1);
  this.setState({person: person}); 
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((person, index) =>{
          return <Person click = {() => this.deletePerson( )} 
          name ={person.name} 
          age = {person.age}
          key = {person.id}/>
        })}
        </div>
        
      )    
    }
    return (
      <div className="App">
       <h1>Hi</h1>
       <p>this is ract app</p>
       <button 
       style={style}
       onClick={this.togglePersonHandler}>Switch Name</button>
       {person}
       </div>
    );
  }
}

export default App;
