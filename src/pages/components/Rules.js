import React, { Component } from 'react'
import './Rules.css'

class Rules extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
        this.hide = this.hide.bind(this)
    }

    hide() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div>
                {this.state.visible && (
                    <div className="card">
                        <div className="card-block">
                            <span className="close-cross"><a onClick={this.hide}>×</a></span>
                            <h4 className="card-title">How it works</h4>
                            <p className="card-text">Be the first to guess the secret number between 1 and 100 (inclusive). Start the game with 100 points. Each guess costs you:</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item matchup"><i className="material-icons matchup red">clear</i>  - 1 point for incorrect guesses</li>
                            <li className="list-group-item matchup"><i className="material-icons matchup green">done</i>  + Secret Number value for the winner</li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Rules
