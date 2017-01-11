import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Answers from './answers'

class Question extends Component {
  render() {
    const question = this.props.currentQuestion;
    const answerQuestion = this.props.answerQuestion;

    return (
      <div>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Answers question={question} answerQuestion={answerQuestion} />
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
