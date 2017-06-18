import { EventEmitter } from 'events'

class AuthStore extends EventEmitter {
    constructor() {
        super()
        // check sessionStorage first to see if a recent session exists
        this.data = {
            name: sessionStorage.name || '',
            id: sessionStorage.id || -1
        }

    }

    login(newData) {
        // sessionStorage is used in case the browser refreshes
        sessionStorage.setItem('id', newData['id'])
        sessionStorage.setItem('name', newData['name'])
        sessionStorage.setItem('points', newData['points'])
        this.data = newData
        this.emit('change')
    }

    getLogin() {
        return this.data
    }

    logout() {
        sessionStorage.clear()
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
