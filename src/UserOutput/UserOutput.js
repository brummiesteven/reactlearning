import React from 'react'

const UserOutput = (props) => {

    let sentences = ['A song can make or ruin a '+props.name+'s day if they let it get to them.',props.name+' Dont step on the broken glass.',props.name+ 'has never been to Asia, nor has '+props.name+' visited Africa.','Rock music approaches at '+props.name+' velocity.','Writing a list of random sentences is harder than '+props.name+' initially thought it would be.','Check back tomorrow; '+props.name+' will see if the book has arrived.',props.name+' turned in the research paper on Friday; otherwise, '+props.name+'would have not passed the class.',props.name+' told us a very exciting adventure story.']


    return (
        <div>
        <p>{sentences[Math.floor((Math.random() * sentences.length) + 1)]}</p>
        <p>{sentences[Math.floor((Math.random() * sentences.length) + 1)]}</p>
        </div>
    )
}

export default UserOutput
