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
                <div id='score'>
                    <p>Score</p>
                    <p>Best Score</p>
                </div>
            </nav>
        );
    }

}