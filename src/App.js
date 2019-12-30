import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = props => {
  // state = {
  //   people: [
  //     {name: 'Kev', age:31},
  //     {name: 'Steve', age:29},
  //     {name: 'Nick', age:30},
  //     {name: 'Russ', age:27}
  //   ]
  // }

  // switchNameHandler= () => {
  //   this.setState({
  //     people: [
  //       {name: 'Zaneta', age:31},
  //       {name: 'Marvin', age:35},
  //       {name: 'Tabraiz', age:27},
  //       {name: 'Divyen', age:28}
  //     ]
  //   })
  // }

  // render() {

  const [peopleState, setPeopleState] = useState({
    people: [
            {name: 'Zaneta', age:31},
            {name: 'Marvin', age:35},
            {name: 'Tabraiz', age:27},
            {name: 'Divyen', age:28}
          ]
  })

  const switchNameHandler = (newName) => {
    setPeopleState({
      people: [
        {name: 'Kev', age:31},
        {name: 'Steve', age:29},
        {name: 'Nick', age:30},
        {name: newName, age:27}
      ]
    })  
  }

  const nameChangedHandler = (event) => {
    setPeopleState({
      people: [
        {name: event.target.value, age:31},
        {name: 'Marvin', age:35},
        {name: 'Tabraiz', age:27},
        {name: 'Divyen', age:28}
      ]
    })
  }

  const storyNameChangedHandler = (event) => {
    setPeopleState({
      people: [
        {name: event.target.value, age:31},
        {name: 'Marvin', age:35},
        {name: 'Tabraiz', age:27},
        {name: 'Divyen', age:28}
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <h2>longjing</h2>
      <h3>pipeline</h3>
      <p>this is some nonsence text becasue the tutorial told me to do it</p>
      <button style={style} onClick={() => switchNameHandler('Longjing')}>Switch Name</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} changed={nameChangedHandler}>I like Football</Person>
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age} click={switchNameHandler.bind(this, 'Max')} changed={nameChangedHandler}> play the trumpet</Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age} changed={nameChangedHandler}>I am a guitar wizzard</Person>

      <Person name={peopleState.people[3].name} age={peopleState.people[3].age} changed={nameChangedHandler}>I am a LONGJING wizzard</Person>
      <h1>User Input and Output Demo</h1>
      <p><UserInput default={peopleState.people[0].name} changed={storyNameChangedHandler}></UserInput></p>
      <p><UserOutput name={peopleState.people[0].name}></UserOutput></p>
      </div>
    
  );
}
// }

export default App;
