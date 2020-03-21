import React from 'react'
import { connect } from 'react-redux'
import login from '../store/auth/actions'
import { userLoggedOut } from '../store/auth/actions'

class Loginpage extends React.Component {

    // You can use the default email and password to log in
    state = {
        email: 'kelley@codaisseur.com',
        password: 'abcd'
    }

    handleLogout = () => {
        this.props.dispatch(userLoggedOut())
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('@Loginpage email: ', this.state.email)
        console.log('@Loginpage password: ', this.state.password)
        this.props.dispatch(login(this.state.email, this.state.password))
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render() {
        if (this.props.userLoggedIn) {
            return (
                <div>
                    <h3>User: {this.props.userProfile.name}</h3>
                    <h4>Profile:</h4>
                    <p>{JSON.stringify(this.props.userProfile)}</p>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <input
                                type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <button type='submit'>Login</button>
                        </p>
                    </form>
                </div>
            )
        }
    }
}

function mapStateToProps(reduxState) {
    return {
        userLoggedIn: reduxState.auth.accessToken && reduxState.auth.profile,
        userProfile: reduxState.auth.profile
    }
}

// To connect login page with react redux store
const ConnectedLoginpage = connect(mapStateToProps)(Loginpage)
export default ConnectedLoginpage