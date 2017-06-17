import React, { Component } from 'react'
import AuthStore from './stores/AuthStore'
import { Redirect } from 'react-router'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            justRegistered: this.props.location.justRegistered,
            loggedIn: true
        }
        this.logout = this.logout.bind(this)
        this.closeWelcomeMessage = this.closeWelcomeMessage.bind(this)
    }

    logout() {
        this.setState({
            loggedIn: false
        })
    }

    closeWelcomeMessage() {
        this.setState({
            justRegistered: false
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
                {this.state.justRegistered && (
                        <div className="alert alert-success" role="alert">
                            Hi {this.props.location.name}, Welcome to the guessing game.
                            <span className="close-cross"><a onClick={this.closeWelcomeMessage}>×</a></span>
                        </div>
                )}
                <h1>Home</h1>
                {!this.state.loggedIn && (
                    <Redirect push to={{pathname: "/login"}}/>
                )}
            </div>
        );
    }
}

export default Home;
