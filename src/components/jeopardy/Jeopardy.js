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
      score: 0,
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
  checkAnswer(event) {
    // if (this.state.formData.answer === this.state.data.answer) {
    //Answer is correct, change color to green.
    return (
      <div>
        <p>
          You answered
          {" " + this.state.formData.answer}. The answer is{" "}
          {this.state.data.answer}!
        </p>
      </div>
    );
    //}
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
  testScore() {
    let jeopardyScore = this.state.score;

    this.setState((state, props) => ({
      score: state.score + state.data.value,
    }));
  }
  //display the results on the screen
  render() {
    if (!this.state.submitted) {
      return (
        <div className="Jeopardy">
          <Display
            category={this.getCategory}
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
              <button testScoreButton={this.testScore}> Score + </button>
              <button
                onClick={this.state.formData.answer !== this.state.data.answer}
              >
                Answer Question.
              </button>{" "}
            </form>
          </div>
        </div>
      );
    } else if (this.state.submitted) {
      if (this.getAnswer === this.state.formData.answer) {
        this.state.data.value += this.state.data.score;
        return (
          <div>
            <p>
              You answered
              {" " + this.state.formData.answer}. The answer is{" "}
              {this.state.data.answer}!
            </p>

            <button onClick={this.resetForm}>Next Question</button>
          </div>
        );
      } else {
        return (
          <div>
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
