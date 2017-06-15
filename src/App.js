import React, { Component } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'

import Nav from './pages/components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register.js'
import AuthStore from './pages/stores/AuthStore'


class App extends Component {

    constructor() {
        super()
        this.state = {
            loggedIn: false
        }
    }

    loggedIn() {
        return AuthStore.loggedIn();
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav />
                        <Route exact path="/" render={() => (
                                this.loggedIn() ? (
                                    <Home />
                                ) : (
                                    <Redirect to="/login"/>
                                )
                            )}
                            />
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App
