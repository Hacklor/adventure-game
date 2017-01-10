import React from 'react';
import Answer from './answer';

const Answers = React.createClass({
  render() {
    const answers = this.props.answers.choices;

    return (
      <ul>
        {answers.map((answer, i) => <Answer key={i} answer={answer}/>)}
      </ul>
    )
  }
});

export default Answers;
