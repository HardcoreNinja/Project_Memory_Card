import React, { Component } from "react";
import './GameBoard.css';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loader: false,
            play: false,
            currentCards: null,
        }

        this.seenCards = [];
    }

    shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    drawCard = async () => {
        let meme = '';
        try {
            const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=uOHxwfL5iDZiiTqJYF4ecjttW6A9BqW6', { mode: 'cors' });
            const result = await response.json();
            meme = result.data.images.original.url;

        } catch (error) {
            console.log(`DRAW CARD ERROR: ${error}`);
        }

        this.shuffle(this.seenCards);
        const tempArray = this.seenCards.slice(0, 4);
        const randomIndex = Math.floor(Math.random() * 4);
        tempArray[randomIndex] = meme;

        this.setState({
            currentCards: tempArray,
        })

    }

    cardClicked = (e) => {
        if (this.seenCards.length > 0) {
            if (this.seenCards.includes(e.target.src)) {
                this.props.setScoreToBestScore();

                this.seenCards = [];
                this.setState({
                    play: false,
                    currentCards: null,
                });
            } else if (!this.seenCards.includes(e.target.src)) {

                this.props.incrementScore();
                this.seenCards.push(e.target.src);
                this.drawCard();
            }
        }
        else if (this.seenCards.length <= 0) {
            this.props.incrementScore();
            this.seenCards = this.seenCards.concat(this.state.currentCards);
            this.drawCard();
        }
    }

    drawFirstCards = async () => {
        let tempArray = [];

        for (let i = 0; i < 4; i++) {
            try {
                const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=uOHxwfL5iDZiiTqJYF4ecjttW6A9BqW6', { mode: 'cors' });
                const result = await response.json();
                tempArray.push(result.data.images.original.url);

            } catch (error) {
                console.log(`DRAW FIRST CARDS ERROR: ${error}`);
            }
        }

        this.setState({
            loader: false,
            play: true,
            currentCards: tempArray,
        });
    }

    startGame = () => {
        this.setState({
            loader: true,
        })

        this.drawFirstCards()
    };

    render() {
        if (this.state.loader) {
            return (
                <div id='gameBoard'>
                    <div id='playArea'>
                        <div id='cards'>
                            <div className="loader" />
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
        if (this.state.play) {
            return (
                <div id='gameBoard'>
                    <div id='playArea'>
                        <div id='cards'>
                            <div id='cardContainer'>
                                <img onClick={this.cardClicked} src={this.state.currentCards[0]} alt={this.state.currentCards[0]} className='card' id='card0' />
                                <img onClick={this.cardClicked} src={this.state.currentCards[1]} alt={this.state.currentCards[1]} className='card' id='card1' />
                                <img onClick={this.cardClicked} src={this.state.currentCards[2]} alt={this.state.currentCards[2]} className='card' id='card2' />
                                <img onClick={this.cardClicked} src={this.state.currentCards[3]} alt={this.state.currentCards[3]} className='card' id='card3' />
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