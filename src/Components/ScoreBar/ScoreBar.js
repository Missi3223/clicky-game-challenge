import React from "react";
import "./style.css";

function ScoreBar(props) {
  return <div className = "row"><div className = "col-6"><h3 className="insruct">Click any image to begin</h3></div>
  <div className = "col-6"><h3 className="title">{props.children}</h3></div></div>;
}

export default ScoreBar;