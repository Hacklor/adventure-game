import React, { Component } from 'react';
import Answer from './answer';

export default class Answers extends Component {
  render() {
    const answerQuestion = this.props.answerQuestion;

    const question = this.props.question;
    const questionId = question.id;
    const answers = question.answers.choices;

    return (
      <ul>
        {answers.map((choice, i) => {
          return (
            <Answer key={i} questionId={questionId} choice={choice} answerQuestion={answerQuestion} />
          )
        })}
      </ul>
    )
  }
}
