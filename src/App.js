import React, { Component } from 'react';
import matchcards from './matchcards.json';
import ScoreBar from './Components/ScoreBar';
import Jumbotron from './Components/Jumbotron';
import MatchCard from './Components/CodeCard';
import Wrapper from './Components/Wrapper';
import './App.css';


let correctGuesses = 0;
let topScore = 0;
let clickMessage = "Click any image to begin";

class App extends Component{

  state = {
    matchcards,
    correctGuesses,
    topScore,
    clickMessage
  };

  setClicked = id => {
      // create an array of matchcards ID
    const matchcards = this.state.matchcards;
    const clickedMatch = matchcards.filter(match => match.id === id);
    // Set this.state.matchcards equal to the new matchcards array
    if (clickedMatch[0].clicked){
      //  local test before deploy
      console.log("Correct Guesses: " + correctGuesses);
      console.log("Top Score: " + topScore);

      correctGuesses = 0;
      clickMessage = "FAILURE!!"
      correctGuesses = 1;
      clickMessage = "Good Luck"

      for (let i = 0; i < matchcards.length; i++){
        matchcards[i].clicked = false;
      }

      this.setState({ clickMessage});
      this.setState({ correctGuesses});
      this.setState({ matchcards});

      // otherwise if clicked = false, and user has not finished
    }else if (correctGuesses < 11){
      // set value to TRUE
      clickedMatch[0].clicked = true;
      // increase counter
      correctGuesses++;
      // this clicked Message
      clickMessage = "Keep Going!!";

      if (correctGuesses > topScore){
        topScore = correctGuesses;
        this.setState({topScore});
      }
      // SHUFFLE Time
      matchcards.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({matchcards});
      this.setState({correctGuesses});
      this.setState({clickMessage});
    }else{

      clickedMatch[0].clicked = true;

      // restart the counter
      correctGuesses = 0;

      clickMessage = "GREAT JOB!!! But can you do it again?";
      topScore = 12;
      this.setState({topScore});

      for (let i = 0; i < matchcards.length; i++){
        matchcards[i].clicked = false;
      }
      // shuffle again.  See if we can reuse this function
      matchcards.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({matchcards});
      this.setState({correctGuesses});
      this.setState({clickMessage});
    }
  };
// RENDER

  render(){

    return(
      <Wrapper>
        <div className ="row">
        <Jumbotron> Clicky Game with Code Images</Jumbotron>
        </div>
      <div className ="row">
      <ScoreBar
        correctGuesses= {this.state.correctGuesses}
        topScore = {this.state.topScore}
      />
      </div>
        <div className = "row">
        <h1>{this.state.clickMessage}</h1></div>
        <div className = "row">
        {this.state.matchcards.map(match => (
          <MatchCard
          clickMessage =  {this.clickMessage}
          setClicked={this.setClicked}
          id={match.id}
          key={match.id}
          image = {match.image}
          />
        ))}
          </div>
      </Wrapper>
    )
  }
}

export default App;
