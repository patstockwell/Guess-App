import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import AuthStore from '../stores/AuthStore'

class Nav extends Component {

    logout() {
        AuthStore.logout();
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <Link to="/"><h1 className="home-heading">Number Guess</h1></Link>
                        <h4>Current Player: <span id="login"></span></h4>
                        <div className="login-group">
                            <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
                            <button type="button" className="btn btn-success" onClick={this.logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
