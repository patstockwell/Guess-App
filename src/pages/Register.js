import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    registerNewPlayer(name, password) {
        axios.get('http://localhost:8080/player/register', {
            params: {
                name: name,
                password: password
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Register</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-3"></div>
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
                                                <input type="submit" value="Register" className="btn btn-success btn-block"/>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
