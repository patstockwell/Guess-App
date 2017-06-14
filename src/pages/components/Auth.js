import { Component } from 'react';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            id: -1
        }
        this.setID = this.setID.bind(this);
    }

    setID(newID) {
        this.setState({
            id: newID
        })
    }

    getID() {
        return this.state.id;
    }

    logout() {
        this.setState({
            id: -1
        })
    }

    loggedIn() {
        return (this.state.id === -1 ? false : true);
    }


}

export default Auth;
