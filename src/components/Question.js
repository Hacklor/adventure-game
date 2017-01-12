import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Answer from './answer'

class Question extends Component {

  renderChoice(key, questionId, choice, answerQuestion, nextQuestion) {
    return (
      <Answer key={key} questionId={questionId} choice={choice}
        answerQuestion={answerQuestion} nextQuestion={nextQuestion} />
    )
  }

  render() {
    const answerQuestion = this.props.answerQuestion;
    const nextQuestion = this.props.nextQuestion;
    const question = this.props.currentQuestion;
    const choices = question.answers.choices;

    return (
      <div>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <ul>
          { choices.map((choice, i) => { return this.renderChoice(i, question.id, choice, answerQuestion, nextQuestion) }) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentQuestion: state.progress.currentQuestion
  }
}

export default connect(mapStateToProps)(Question)
