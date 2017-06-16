import React, { Component } from 'react'
import AuthStore from './stores/AuthStore'
import { Redirect } from 'react-router'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        this.setState({
            loggedIn: false
        })
    }

    componentWillMount() {
        AuthStore.on('change', this.logout)
    }

    componentWillUnmount() {
        AuthStore.removeListener('change', this.logout)
    }

    render() {
        return (
            <div className="container">
                {this.props.location.justRegistered && (<div className="alert alert-success" role="alert">Hi {this.props.location.name}, Welcome to the guessing game.</div>)}
                <h1>Home</h1>
                {!this.state.loggedIn && (
                    <Redirect push to={{pathname: "/login"}}/>
                )}
            </div>
        );
    }
}

export default Home;
