import React, { Component } from 'react';
import Nav from './Nav';
import GameBoard from './GameBoard';

export default class Global extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameBoard: {
                score: 0,
                bestScore: 0,
            },
        }
    }

    incrementScore = () => {
        this.setState(
            {
                gameBoard: {
                    score: this.state.gameBoard.score + 1,
                }
            }
        )
    }

    setScoreToBestScore = () => {
        this.setState(
            {
                gameBoard: {
                    bestScore: this.state.gameBoard.score,
                }
            }
        )
    }


    render() {
        return (
            <div id='global'>
                <Nav gameBoard={this.state.gameBoard} />
                <GameBoard incrementScore={this.incrementScore} setScoreToBestScore={this.setScoreToBestScore} />
            </div>
        )
    }
}