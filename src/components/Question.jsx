import React, { Component } from "react";
import AnswerGrid from "../components/AnswerGrid";
import ArrayQuestion1 from "../arraycomponents/arrayquestion1";

class Question extends Component {
  state = {};

  constructor(props) {
    super(props);
    let question = this.props.qf.getQuestion(props);
    this.state = { question };
    // this.handleButton = this.handleButton.bind(this);
    console.log("question constructor", this.state);
  }

  restart(qf) {
    console.log("restarting question sequence");
    const question = qf.getQuestion(this.props);
    this.setState({ question });
  }

  nextQuestion() {
    const question = this.props.qf.getQuestion(this.props);
    console.log("saving question to state", question);
    this.setState({ question });
  }

  updateGrid() {
    console.log("update grid");
    this.setState({ question: this.state.question });
  }

  timeout() {
    console.log("question timeout");
    this.state.question.incorrect();
  }

  render() {
    console.log("question rerender ", this.state.question);
    return (
      <div>
        {this.state.question.displayQuestion()}
        <AnswerGrid
          display={this.props.labels}
          onClick={this.state.question.handleButton}
          {...this.state}
        />
      </div>
    );
  }
}

export default Question;