import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import AuthStore from '../stores/AuthStore'

class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: AuthStore.loggedIn(),
        }
        this.updateLogin = this.updateLogin.bind(this)
    }

    logout() {
        AuthStore.logout()
    }

    updateLogin() {
        this.setState({
            loggedIn: AuthStore.loggedIn(),
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
            <nav className="navbar navbar-light bg-faded">
                <div className="container">
                    <Link to="/"><h1 className="home-heading">Number Guess</h1></Link>
                    <div className="login-group login-logout">
                        {this.state.loggedIn && (
                            <button type="button" className="btn btn-success" onClick={this.logout}>Logout</button>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
