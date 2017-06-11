import React, { Component } from 'react';
import axios from 'axios';
import Modal from './components/Modal';
import { Redirect } from 'react-router';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get('http://localhost:8080/player/register', {
            params: {
                name: this.state.name,
                password: this.state.password
            }
        });
        this.setState({submitted: true});
    }

    render() {
        return (
            <div>
                <Modal title='Register'>
                    <div className="col-md-6 offset-md-3">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <p>
                                <label>Username</label>
                                <input type="text" className="form-control" value={this.state.name} name="name" required="required" onChange={this.handleChange}/>
                            </p>
                            <p>
                                <label>Password</label>
                                <input type="password" className="form-control" value={this.state.password} name="password" required="required" onChange={this.handleChange}/>
                            </p>
                            <p>
                                <input type="submit" value="Register" className="btn btn-success btn-block"/>
                            </p>
                        </form>
                    </div>
                </Modal>
                {this.state.submitted && (
                    <Redirect to={{pathname: "/login", justRegistered:"true"}}/>
                )}
            </div>
        );
    }
}

export default Register;
