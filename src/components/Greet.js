import React from 'react'

// function Greet() {
//     return <h1>Hello Everyone</h1>
// }
const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello {name} is {heroName}
            </h1>
            
        </div>
    )
}

export default Greet
