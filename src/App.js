import React from 'react';
// import imageCards from './imageCards.json';
// import ScoreBar from './Components/ScoreBar';
import GameControl from './Components/GameControl';
import Jumbotron from './Components/Jumbotron';
// import MatchCard from './Components/MatchCard';
// import Wrapper from './Components/Wrapper';
import './App.css';


// let correctGuesses = 0;
// let topScore = 0;
// let clickMessage = "";

// class App extends Component{

//   state = {
//     imageCards,
//     correctGuesses,
//     topScore,
//     clickMessage
//   };

//   setClicked = id => {
//       // create an array of imageCards ID
//     const imageCards = this.state.imageCards;
//     const clickedMatch = imageCards.filter(match => match.id === id);
//     // Set this.state.imageCards equal to the new imageCards array
//     if (clickedMatch[0].clicked){
//       //  local test before deploy
//       console.log("Correct Guesses: " + correctGuesses);
//       console.log("Top Score: " + topScore);

//       correctGuesses = 0;
//       clickMessage = "FAILURE!!"


//       for (let i = 0; i < imageCards.length; i++){
//         imageCards[i].clicked = false;
//       }

//       this.setState({ clickMessage});
//       this.setState({ correctGuesses});
//       this.setState({ imageCards});

//       // otherwise if clicked = false, and user has not finished
//     }else if (correctGuesses < 11){
//       // set value to TRUE
//       clickedMatch[0].clicked = true;
//       // increase counter
//       correctGuesses++;
//       // this clicked Message
//       clickMessage = "Keep Going!!";

//       if (correctGuesses > topScore){
//         topScore = correctGuesses;
//         this.setState({topScore});
//       }
//       // SHUFFLE Time
//       imageCards.sort(function(a, b){return 0.5 - Math.random()});

//       this.setState({imageCards});
//       this.setState({correctGuesses});
//       this.setState({clickMessage});
//     }else{

//       clickedMatch[0].clicked = true;

//       // restart the counter
//       correctGuesses = 0;

//       clickMessage = "GREAT JOB!!! But can you do it again?";
//       topScore = 12;
//       this.setState({topScore});

//       for (let i = 0; i < imageCards.length; i++){
//         imageCards[i].clicked = false;
//       }
//       // shuffle again.  See if we can reuse this function
//       imageCards.sort(function(a, b){return 0.5 - Math.random()});

//       this.setState({imageCards});
//       this.setState({correctGuesses});
//       this.setState({clickMessage});
//     }
//   };
// RENDER

const App = ()=> (

      <div className="container-fluid mainContainer">
      <Jumbotron />
      <GameControl />

      </div>

);



export default App;
