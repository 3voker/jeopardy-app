import React, { Component } from "react";

//Display should be a stateless component that projects the game
function Display(props) {
  return (
    <div className="Display">
      <div>
        <h2>Category: {props.category} </h2>
      </div>
      <div>
        <h3>Point value: {props.pointValue} </h3>
      </div>
      <div>
        <h4>
          <strong>Question: {props.question}</strong>
          <br />
        </h4>
      </div>
      <div>
        <h3 className="Score">Score: {props.score}</h3>
      </div>
    </div>
  );
}

export default Display;
