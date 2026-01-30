import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 0,
            count2 : 2
        }
    }
    render () {
        return (
            <div>
                <h2>Count = {this.state.count}</h2>
                <button onClick={()=> {
                    this.setState ({
                        count : this.state.count + 1,
                    })
                }}>Inc. Button</button>
                <h2>Count2 = {this.state.count2}</h2>
                <h2>{this.props.name}</h2>
                <h2>{this.props.location}</h2>
            </div>
        )
    }
}
export default UserClass