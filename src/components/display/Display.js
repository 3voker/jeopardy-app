import React, { Component } from "react";

//Display should be a stateless component that projects the game
function Display(props) {
  return (
    <div className="Display">
      <div className="category">
        <h2>Category: {props.category}</h2>
      </div>
      <div>
        <h2>
          <strong>Question: {props.question}</strong>
          <br />
        </h2>
      </div>
      <div className="score">
        <h3>Score: {props.score}</h3>
      </div>
    </div>
  );
}

export default Display;
