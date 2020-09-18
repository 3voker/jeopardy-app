import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      submitted: false,
      data: { category: {} },
      playerStats: {
        resetCount: 0,
        score: 0,
      },

      formData: { answer: "" },
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value; //What is happening here?
    this.setState({ formData });
  };

  //When answer is submitted will submit here, don't ask me what this does does I forgot.
  handleSubmit = (event) => {
    event.preventDefault(); //What is .preventDefault?
    this.setState({ submitted: true });
  };
  checkAnswer(h, e) {
    let score = this.state.score;
    let isEqual = false;

    //Answer is correct, change color to green.
    if (h.trim() === e.trim()) {
      this.isEqual = true;
    }
    if (isEqual) {
      score += this.state.data.value;
    }
  }

  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        answer: "",
      },
    });
  };
  getCategory() {
    let category = "Loading..";

    if (this.state.data.category && this.state.data.category.title) {
      return (category = this.state.data.category.title);
    }
  }
  getAnswer() {
    let answer = "and the correct answer is...";

    if (this.state.data.answer) {
      return (answer = this.state.data.answer);
    }
  }
  //display the results on the screen
  render() {
    if (!this.state.submitted) {
      return (
        <div className="Jeopardy">
          <Display
            category={this.getCategory}
            pointValue={this.state.data.value}
            question={this.state.data.question}
            score={this.state.score}
          />
          <br />
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="answer">Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={this.state.formData.answer}
                  onChange={this.handleChange}
                />
              </div>

              <button
                onClick={this.checkAnswer(
                  this.state.formData.answer,
                  this.state.data.answer
                )}
              >
                Answer Question.
              </button>
            </form>
          </div>
        </div>
      );
    } else if (this.state.submitted) {
      if (this.state.formData.answer === this.state.formData.answer) {
        this.state.data.score += this.state.data.value;
        return (
          <div>
            <Display
              category={this.getCategory}
              pointValue={this.state.data.value}
              question={this.state.data.question}
              score={this.state.score}
            />
            <p> {this.state.data.value}</p>
            <p>
              You answered
              {" " + this.state.formData.answer}. The answer is{" "}
              {this.state.data.answer}!
            </p>

            <button onClick={this.resetForm}>Next Question</button>
          </div>
        );
      }
    }
  }
}

export default Jeopardy;
