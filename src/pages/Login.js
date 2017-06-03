import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Login in</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="well">
                                        <form method="post" className="form">
                                            <p>
                                                <label>Username</label>
                                                <input type="text" className="form-control" name="name" required="required"/>
                                            </p>
                                            <p>
                                                <label>Password</label>
                                                <input type="password" className="form-control" name="password" required="required"/>
                                            </p>
                                            <p>
                                                <input type="submit" value="login" className="btn btn-success btn-block"/>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="lead">Not a registered yet? Click below</p>
                                    <Link to="/register"><button className="btn btn-info btn-block">Register</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

// <p><a href="./register.html" className="btn btn-info btn-block">register now!</a></p>
