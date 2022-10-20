import React, { Component } from "react";
import './GameBoard.css';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false,
        }
    }
    render() {

        if (this.state.play) {
            return (
                <div id='gameBoard'>
                    <div id='cards'>Cards</div>
                    <div id='transport'>
                        <button id='actionButton'>
                            Restart
                        </button>
                    </div>
                </div>
            );
        }
        else if (!this.state.play) {
            return (
                <div id='gameBoard'>
                    <div id='playArea'>
                        <div id='cards'>
                            <p>Press <i>Play</i> to Start a Game...</p>
                        </div>
                    </div>
                    <div id='transport'>
                        <button id='actionButton'>
                            Play
                        </button>
                    </div>
                </div>
            );
        }
    }
}