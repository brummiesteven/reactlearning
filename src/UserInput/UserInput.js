import React from 'react'

const UserInput = (props) => {
    return(
        <textarea value={props.default} onChange={props.changed}></textarea>
    )
}

export default UserInput

