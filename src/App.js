import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import person from './Person/Person.js';
import { isCompositeComponent, findRenderedComponentWithType } from 'react-dom/test-utils';
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover  {
      background-color: ${props => props.alt ? 'salmon':'lightgreen'};
      color: black;
    }

`

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
            {id: 1, name: 'Kev', age:31},
            {id: 2, name: 'Nick', age:30},
            {id: 3, name: 'Steve', age:29},
            {id: 4, name: 'Russ', age:27}
          ]
  })

  const [visibleState, setVisibleState] = useState({
    people: false
  })

    const nameChangedHandler = (event, id) => {
      const personIndex = peopleState.people.findIndex(p => {
        return p.id === id
      });
      const person = {
        ...peopleState[personIndex]
      }

      person.name = event.target.value

      const people = [...peopleState.people]
      people[personIndex] = person

      setPeopleState({
      people: people
    })
  }

  const storyNameChangedHandler = (event) => {
    setPeopleState({
      people: [
        {id: 1 , name: event.target.value, age:31},
        {id:2, name: 'Nick', age:30},
        {id: 3, name: 'Steve', age:29},
        {id: 4, name: 'Russ', age:27}
      ]
    })
  }

  const deletePersonHandler = (i) => {
    console.log('delete person')
    const people = [...peopleState.people]
    people.splice(i, 1)
    setPeopleState({people:people})
  }

  const togglePeopleHandler = () => {
    setVisibleState({
      people: !visibleState.people
    })
  }

  const style = {
    
  }

  let people = null

  if (visibleState.people) {
    people = (
      <div>
        {peopleState.people.map((person, i) => {
          return <Person name={person.name} age ={person.age} changed ={(event) => nameChangedHandler(event, person.id)} click={() => deletePersonHandler(i)} key={person.id}></Person>
        })}
        </div>
    )
  }

  let classes = [];
  if(peopleState.people.length <=2) {
    classes.push('red')
  }
  if(peopleState.people.length <=1) {
    classes.push('bold')
  }
  if(peopleState.people.length > 2) {
    classes = []
  }

  return (
    
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <h2>longjing</h2>
      <h3>pipeline</h3>
      <p className={classes.join(' ')}>There are {peopleState.people.length} people in the state</p>
      <StyledButton alt={people} onClick={() => togglePeopleHandler()}>Toggle People</StyledButton>
      {people}
      {console.log(peopleState.people)}
      <h1>User Input and Output Demo</h1>
      <UserInput default={peopleState.people[0].name} changed={storyNameChangedHandler}></UserInput>
      <UserOutput name={peopleState.people[0].name}></UserOutput>
      </div>
      
    
  );
}
// }

export default App;
