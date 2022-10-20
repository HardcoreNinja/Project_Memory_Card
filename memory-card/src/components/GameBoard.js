import React, { Component } from "react";
import './GameBoard.css';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false,
            cards: null,
        }

        this.seenCards = [];
        this.newCard = null;
    }

    drawFirstCards = async () => {
        let tempArray = [];

        for (let i = 0; i < 4; i++) {
            try {
                const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=uOHxwfL5iDZiiTqJYF4ecjttW6A9BqW6&tag=pillow:', { mode: 'cors' });
                const result = await response.json();
                tempArray.push(<img key={result.data.images.original.url} src={result.data.images.original.url} alt={result.data.title} className='card' />);

            } catch (error) {
                console.log(error);
            }
        }

        this.seenCards = tempArray;

        this.setState({
            play: true,
            cards: tempArray,
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
                                {this.state.cards}
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