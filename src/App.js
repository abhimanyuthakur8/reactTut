import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium'

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

nameChangeHandler = (event, id) =>{
  const personIndex =this.state.person.findIndex(p => {
    return p.id===id;
  });
  const person = {
    ...this.state.person[personIndex]
  };
  person.name=event.target.value;
  const persons = [...this.state.person];
  persons[personIndex]=person;

  this.setState({
    person : person
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'black',
        color: 'yellow'
      }
    }
    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((person, index) =>{
          return <Person 
          click = {() => this.deletePerson( )} 
          name ={person.name} 
          age = {person.age}
          key = {person.id}
          change = {(event) => this.nameChangeHandler(event, person.id)}/>
        })}
        </div>
        
      )  
      style.backgroundColor= 'red';  
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }
    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <= 1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
      <div className="App">
       <h1>Hi</h1>
       <p className={classes.join('')}>this is ract app</p>
       <button 
       style={style}
       onClick={this.togglePersonHandler}>Switch Name</button>
       {person}
       </div>
       </StyleRoot>
    );
  }
}

export default Radium(App);
