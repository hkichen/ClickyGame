import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import princesses from "./princesses.json";
import "./App.css";

class App extends Component {
  state = {
    princesses,
    clicked: [],
    status: "",
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.princesses.forEach(princess => {
      princess.count = 0;
    });
    this.setState({score: 0, status:'Whoops, you clicked that already. Click another pic to play again.'});
    return true;
  }

  clickCount = id => {
    this.state.princesses.find((event, i) => {
      if (event.id === id) {
        if(princesses[i].count === 0){
          princesses[i].count = princesses[i].count + 1;
          this.setState({score : this.state.score + 1, status:`Click on each picture once.`}, function(){
            console.log(this.state.score);
          });
          this.state.princesses.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endGame();
        }
      }
    });
  }
  render() {
    return (
      <div>
     <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore} status={this.state.status} >Princess Memory Game</Header>
        {this.state.princesses.map(princess => (
        <MemoryCard
          clickCount={this.clickCount}
          id={princess.id}
          key={princess.id}
          image={princess.image}          
        />
        ))}
      </Wrapper>
      <footer className="text-center">
      <p>Built by Lina Kichen. Find the original code 
        <a href="https://github.com/hkichen/clickyGame" > here
        </a>
      </p>
    </footer>
    </div>
    );
  } 
}

export default App;
