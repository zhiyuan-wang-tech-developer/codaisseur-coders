import React from 'react'
import { Link } from 'react-router-dom'

class Toolbar extends React.Component {
    render() {
        return (
            <div style={
                {
                    display: 'flex',
                    color: 'black',
                    opacity: '0.7',
                    justifyContent: 'space-between',
                    padding: '15px'
                }
            }>
                <Link to='/homepage'>Home</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/developers'>List</Link>
            </div>
        )
    }
}

export default Toolbar