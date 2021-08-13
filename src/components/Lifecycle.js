import React, { Component } from 'react'

class Lifecycle extends Component {

constructor(props) {
    super(props)

    this.state = {
         name: 'user'
    }
    console.log('LifeCycle constructor')
}

static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
}

componentDidMount() {
    console.log("DidMount")
}

    render() {
        console.log('lifecycle render')
        return (
            <div>
                Lifecycle A
            </div>
        )
    }
}

export default Lifecycle
