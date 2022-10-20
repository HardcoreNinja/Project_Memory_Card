import React, { Component } from "react";
import './GameBoard.css';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false,
            currentCards: null,

        }

        this.seenCards = new Map();
    }

    drawFirstCards = async () => {
        let tempArray = [];

        for (let i = 0; i < 4; i++) {
            try {
                const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=uOHxwfL5iDZiiTqJYF4ecjttW6A9BqW6&tag=pillow:', { mode: 'cors' });
                const result = await response.json();
                tempArray.push(result.data.images.original.url);

            } catch (error) {
                console.log(error);
            }
        }

        this.setState({
            play: true,
            currentCards: tempArray,
        });
    }

    startGame = () => {
        this.drawFirstCards()
    };

    render() {
        if (this.state.play) {
            return (
                <div id='gameBoard'>
                    <div id='playArea'>
                        <div id='cards'>
                            <div id='cardContainer'>
                                <img src={this.state.currentCards[0]} alt={this.state.currentCards[0]} className='card' id='card0' />
                                <img src={this.state.currentCards[1]} alt={this.state.currentCards[1]} className='card' id='card1' />
                                <img src={this.state.currentCards[2]} alt={this.state.currentCards[2]} className='card' id='card2' />
                                <img src={this.state.currentCards[3]} alt={this.state.currentCards[3]} className='card' id='card3' />
                            </div>
                        </div>
                    </div>
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
                        <button onClick={this.startGame} id='actionButton'>
                            Play
                        </button>
                    </div>
                </div>
            );
        }
    }
}