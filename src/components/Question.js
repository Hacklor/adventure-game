import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Answer from './answer'

class Question extends Component {

  render() {
    this.answerQuestion = this.props.answerQuestion;
    this.nextQuestion = this.props.nextQuestion;
    this.question = this.props.currentQuestion;
    const choices = this.question.answers.choices;

    return (
      <div>
        <h2>{this.question.title}</h2>
        <p>{this.question.description}</p>
        <ul>
          {
            choices.map((choice, i) => {
              return (
                <Answer key={i} questionId={this.question.id} choice={choice}
                  answerQuestion={this.answerQuestion} nextQuestion={this.nextQuestion} />
              )
            })
          }
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
