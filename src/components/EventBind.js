import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: <h1>Hello</h1>
        }
        // this.clickHandler =this.clickHandler.bind(this)

    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: <h1>Good Bye!</h1>
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
