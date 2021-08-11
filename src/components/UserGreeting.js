import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggdIn: false
        }
    }

    render() {

        return this.state.isLoggdIn && <div>Welcome User</div>

        // return(
        //     this.state.isLoggdIn ?
        //     <div>Welcome User</div> :
        //     <div>Welcome Guest</div>
        // )

        // let message
        // if (this.state.isLoggdIn) {
        //     message = <div>Welcome users </div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if (this.state.isLoggdIn) {
        //     return <div> Welcome user</div>
        // } else {
        //     return <div> Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome to Your!</div>
        //         <div>Welcome</div>
        //     </div>
        // )
    }
}

export default UserGreeting
