import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import princesses from "./princesses.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { princesses: princesses };
  }

  render() {
    var thisApp = this
    const memoryCards = this.state.princesses.map(function(princess, index) {
      return <MemoryCard
        name={princess.name}
        image={princess.image}
        key={princess.id}
        handleClick={function(e) {
          if (thisApp.state.princesses[index].clicked) {
            alert("YOU FUCKED UP")
          }
          var newPrincesses = thisApp.state.princesses;
          newPrincesses[index].clicked = true;
          thisApp.setState({princesses: newPrincesses});
          console.log(thisApp.state.princesses)
        }}
      />
    });

    return (
      <Wrapper>
        <Header>Princess Memory Game</Header>
        {memoryCards}
      </Wrapper>
    )
  }
    

}

export default App;
