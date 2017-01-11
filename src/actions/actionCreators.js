export function answerQuestion(questionId, answerId) {
  return {
    type: 'ANSWER_QUESTION',
    questionId,
    answerId
  }
}
