export default function progress(state = [], action) {
  switch(action.type) {
    case 'ANSWER_QUESTION':
      const questionId = action.questionId
      const answerId = action.answerId

      return Object.assign({}, state, {
        answers: [
          ...state.answers,
          {
            questionId,
            answerId
          }
        ]
      })
      // Goto next question
      return newState;
      break;
  }
  return state;
}
