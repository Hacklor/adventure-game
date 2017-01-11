import React, { Component } from 'react';

export default class Answer extends Component {

  onClick(e) {
    this.props.answerQuestion(this.props.questionId, this.props.choice.id);
  }

  render() {
    const title = this.props.choice.title;

    return (
      <li>
        <button onClick={this.onClick.bind(this)} type="button">{title}</button>
      </li>
    )
  }
}
