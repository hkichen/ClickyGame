import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import princesses from "./princesses.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>Princess Memory Game</Header>
        <MemoryCard
          key={princess.id}
          image={princess.image}
          clicked={princess.clicked}
          onClicked={this.changeStatus}
        />
      </Wrapper>
    )
  }
    

}

export default App;
