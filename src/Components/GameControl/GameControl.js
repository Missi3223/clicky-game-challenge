import React from 'react';
import MatchCard from '../MatchCard';
import "./style.css";
import images from '../../imageCards.json';

class GameControl extends React.Component {
	state = {
		images,
		message: "Test your memory by clicking on any image",
		score: 0,
		topScore: 0
	};

	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "FAILURE!",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};
	render() {
		return (
			<div className="container-fluid CardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">

					<div className="row">
					{this.state.images.map(image => (
						<MatchCard
							key={image.id}
							id={image.id}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>

				</div>
			</div>
		);
	}
};

export default GameControl;
