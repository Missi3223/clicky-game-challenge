import React from 'react';
import "./style.css";


const MatchCard = props =>(
	<div onClick={()=> props.setClicked(props.id)} className="card">
		<div className="img-container">
		<img alt = {props.id}src = {props.image}/>
		</div>
	</div>
);

export default MatchCard;