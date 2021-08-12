import React, { useState } from 'react'

function Button() {
    const [show, setShow] = useState(true)

    function clickChange() {
        setShow(!show);
    }
    return (
        <div>
            {
                show ? <p>Please Show Me!</p> : null
            }
            <button onClick={clickChange}>Click Me</button>
        </div>
    )
}

export default Button
