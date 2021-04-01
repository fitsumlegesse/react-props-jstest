import React from 'react'

export default function Form(props){

    async function handleSubmit(e){
        e.preventDefault()

        //it makes request to the pokemon api
        const request = await fetch('https://pokeapi.co/api/v2/pokemon')
        //it recives json as a response. It stores the response in the data var
        const data = await request.json()

        // on the data.results data it got back, it will map thru it and store the obj in the pokemon var 
        let pokemon = data.results.map(pokemon=>pokemon.name)

        //then it passes pokemon as an argument to the method created in App.js
        props.updatePeople(pokemon)
    }

    return (

        // when the button is clicked, it form will call the handlesubmit function abouve which makes a req
        //to pokemon and calls the updatePeople method 
        
        <form className="people-form" onSubmit={handleSubmit}>
            <button type="submit">Click to get people</button>
        </form>
    )
}
