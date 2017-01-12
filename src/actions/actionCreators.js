import * as actions from './actions';

export function answerQuestion(questionId, answerId) {
  return {
    type: actions.ANSWER_QUESTION,
    questionId,
    answerId
  }
}

export function nextQuestion(questionId, answerId) {
  return {
    type: actions.NEXT_QUESTION,
    questionId,
    answerId
  }
}
