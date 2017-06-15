import { EventEmitter } from 'events'

class AuthStore extends EventEmitter {
    constructor() {
        super()
        this.data = {
            name: '',
            id: -1
        }

    }

    login(newData) {
        this.data = newData
    }

    getLogin() {
        return this.data
    }

    logout() {
        this.data = {
            name: '',
            id: -1
        }
        this.emit('change')
    }

    loggedIn() {
        return (this.data.id === -1 ? false : true)
    }
}

const auth = new AuthStore()
export default auth
