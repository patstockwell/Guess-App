import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Modal from './components/Modal'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal title='Login'>
                <div className="col-md-6">
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
                <div className="col-md-6">
                    <p className="lead">Not signed up yet? Get started here</p>
                    <Link to="/register" className="link-btn"><button className="btn btn-info btn-block">Register</button></Link>
                </div>
            </Modal>
        );
    }
}

export default Login;
