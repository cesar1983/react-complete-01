import React, { Component } from 'react';
// import React, { useState } from 'react';

import styles from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = { 
    persons : [
      { id: 1, name: 'Max', age: 45 },
      { id: 2, name: 'Fivela', age: 25 },
      { id: 3, name: 'Asshes', age: 19 }
    ],
    showPersons: false
  }

  nameChangedHndler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // alternativa
    // const person = Object.assign({}, this.state.persons[personIndex]); 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person; 

    this.setState(
      {
        persons: persons      
      }
    )
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleNameHandlers = () => {
    this.setState ({
      showPersons: !this.state.showPersons
    })    
  }


  render(){

    let persons = null;

    if (this.state.showPersons) {

      persons =
        <Persons 
          persons = {this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHndler}
          />;

    } 

    return (
        <div className={styles.App}>

          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPerson}
            persons={this.state.persons} 
            toggleName={this.toggleNameHandlers} />
          {persons}
          
        </div>
    );
  }
}


/*
const App = props => {

   const [ personsState, setPersonsState ] = useState(
      { 
        persons : [
          { name: 'Max', age: 45 },
          { name: 'Fivela', age: 25 },
          { name: 'Asshes', age: 19 }
        ],
        other: 'ok'
      }
   );

   console.log(personsState);  

  const switchNameHandler = () => {
        setPersonsState(
          {
            persons: [
              { name: 'Juca', age: 22 },
              { name: 'Ji', age: 66 },
              { name: 'Shee', age: 88 }
            ],
            other: personsState.other
          }
        );
      }

  return (

    <div className="App">
      
      <h1>Hi, I am a fucking react app</h1>
      
      <p>This works just perfectly!</p>
     
      <button onClick={switchNameHandler}>Switch names</button>
        
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> Ha ha ha</Person>
    
    </div>
  );

  // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'OKKKK'));
}

*/

export default App