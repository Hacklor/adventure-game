import React from 'react';
import Answers from './answers'

const Question = React.createClass({
  render() {
    const question = this.props.progress.currentQuestion;

    return (
      <div>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Answers answers={question.answers} />
      </div>
    )
  }
});

export default Question;
