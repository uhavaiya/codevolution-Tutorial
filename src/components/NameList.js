import React from 'react'

// function NameList() {
//     const names = ['ab','ac','ad','ae']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return <div>{nameList}</div>
    
// }

function NameList() {
    const names = ['ab','ac','ad','ae']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
    
}

export default NameList
