import React from 'react';
import "./style.css";
import MatchCard from '../CodeCard';

class Popup extends React.Component{

	render(){
		return(
			<div className = "popup">
			<div className = "popup_inner">
			<h1>{this.props.text}</h1>
			<MatchCard
			setClicked = {this.setClicked}/>
			</div></div>
		)

	}
}