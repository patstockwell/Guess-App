import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Modal from './components/Modal'
import AuthStore from './stores/AuthStore'
import axios from 'axios'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: AuthStore.getLogin()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReply = this.handleReply.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.get('http://localhost:8080/player/login', {
            params: {
                name: this.state.name,
                password: this.state.password
            }
        }).then(reply => console.log(reply))
    }

    handleReply(reply) {
        AuthStore.login(reply.data)
    }

    render() {
        console.log(this.state.data)
        return (
            <div className="container">
                {this.props.location.justRegistered && (<div className="alert alert-info" role="alert">Success! Account created, login below</div>)}
                <Modal title='Login'>
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit} className="form">
                            <p>
                                <label>Username</label>
                                <input type="text" className="form-control" name="name" required="required" value={this.state.name} onChange={this.handleChange}/>
                            </p>
                            <p>
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" required="required" value={this.state.password} onChange={this.handleChange}/>
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
            </div>
        );
    }
}

export default Login;
