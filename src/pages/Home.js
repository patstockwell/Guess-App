import React, { Component } from 'react'
import AuthStore from './stores/AuthStore'
import { Redirect } from 'react-router'
import Rules from './components/Rules'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            justRegistered: this.props.location.justRegistered,
            loggedIn: true,
            data: AuthStore.getLogin()
        }
        this.updateLogin = this.updateLogin.bind(this)
        this.closeWelcomeMessage = this.closeWelcomeMessage.bind(this)
    }

    updateLogin() {
        this.setState({
            loggedIn: AuthStore.loggedIn(),
            data: AuthStore.getLogin()
        })
    }

    closeWelcomeMessage() {
        this.setState({
            justRegistered: false
        })
    }

    componentWillMount() {
        AuthStore.on('change', this.updateLogin)
    }

    componentWillUnmount() {
        AuthStore.removeListener('change', this.updateLogin)
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
                <div className="row">
                    <div className="col-md-8">
                        <h1>Home</h1>
                        {this.state.data.name && (
                            <p className="current-player">Current Player: <span id="login">{this.state.data.name}</span></p>
                        )}
                        {!this.state.loggedIn && (
                            <Redirect push to={{pathname: "/login"}}/>
                        )}
                    </div>
                    <div className="col-md-4">
                        <Rules></Rules>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
