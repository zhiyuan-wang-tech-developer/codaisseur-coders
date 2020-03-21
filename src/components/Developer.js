import React from 'react'

// Display a single developer info (name, email)
class Developer extends React.Component {
    render() {
        return (
            <div>
                <p>ID: {this.props.developer.id}</p>
                <p>Name: {this.props.developer.name}</p>
                <p>Email: {this.props.developer.email}</p>
            </div>
        )
    }
}

export default Developer