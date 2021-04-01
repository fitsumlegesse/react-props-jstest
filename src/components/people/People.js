import React from 'react'

export default function People(props){
    return(
        //this just renders the data from the Form concept 
        <div className="people">
            {props.data.map((person, idx) => <p key={idx}>{person}</p>)}
            
        </div>
    )
}