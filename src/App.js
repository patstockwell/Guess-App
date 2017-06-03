import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Nav from './pages/components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register.js';


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav />
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
