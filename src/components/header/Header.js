import React from 'react'


function Header(props)
{
    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={()=> props.changeTitle('changed')}>Change title</button>
        </div>
    )
}

export default Header;