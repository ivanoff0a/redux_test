import React, { Component } from 'react' //  PropTypes,

export default class User extends Component {
    render() {
        const { name } = this.props
        return <div>
            <p>Hello, { name } !</p>
        </div>
    }
}