import React from 'react';

const Answer = React.createClass({
  render() {
    const answer = this.props.answer;

    return (
      <li>
        <button type="button">{answer.title}</button>
      </li>
    )
  }
});

export default Answer;
