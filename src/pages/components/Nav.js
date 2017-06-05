import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <Link to="/"><h1>Number Guess</h1></Link>
                        <h4>Current Player: <span id="login"></span></h4>
                        <div className="login-group">
                            <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
                            <button type="button" className="btn btn-success">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
