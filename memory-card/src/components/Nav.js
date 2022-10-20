import './Nav.css';
import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <nav id='nav'>
                {/* Logo */}
                <div id='logo'>
                    <span className="material-symbols-outlined">
                        psychology
                    </span>
                    <h1>Memory Game</h1>
                </div>
                {/* Score */}
                <ul id='score'>
                    <li key='score'>Score: {this.props.gameBoard.score}</li>
                    <li key='bestScore'>Best Score: {this.props.gameBoard.bestScore}</li>
                </ul>
            </nav>
        );
    }

}