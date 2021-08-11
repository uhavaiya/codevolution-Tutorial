import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <div>
                <button onClick={props.greetHandler}>Greet Parent</button>
            </div>
        </div>
    )
}
export default ChildComponent
