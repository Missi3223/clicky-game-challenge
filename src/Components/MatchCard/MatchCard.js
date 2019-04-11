import React from 'react';
import "./style.css";


const MatchCard = props =>(
	<div
	className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}>
	<br />
	<div className = "card" id = "image-card">
	<div className = "img-container">
		<img
		id={props.id}
		src={props.image}
		alt={props.id}
		/>
	</div>
	</div>
	</div>
);
export default MatchCard;
