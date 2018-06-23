import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import princesses from "./princesses.json";
import "./App.css";

class App extends Component {
  state = {
    princesses,
    clickedCards: [],
    status: "",
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(princesses => {
      princesses.count = 0;
    });
    this.setState({score: 0, status:`Whoops, you clicked that one already. Click a picture to start again.`});
    return true;
  }

  shuffleCards = id => {
    let clickedCards = this.state.clickedCards;

    if (clickedCards.includes(id)) {
      this.setState({ clickedCards: [], score: 0, status:`Whoops, you clicked that one already. Click a picture to start again.`})
      return;
    }else {
      clickedCards.push(id);

      if(clickedCards.length === 12) {
        this.setState({score: 12, status:`You got all 12! Click a new picture to play again.`})
        return;
      }

      this.setState({ princesses, clickedCards, score: clickedCards.length, status: " " });

      for (let i = princesses.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [princesses[i], princesses[j]] = [princesses[j], princesses[i]];
      }
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Disney Princess Memory Game</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Header total={this.state.score}
               high Score={this.state.highscore}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.princesses.map(princess => (
            <MemoryCard
              shuffleCards={this.shuffleCards}
              id={princess.id}
              key={princess.id}
              image={princess.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Built by Lina Kichen. Find the original code 
            <a href="https://github.com/hkichen/clickyGame" >here
            </a>
          </p>
        </footer>
    </div>
    );
  } 
}

export default App;
