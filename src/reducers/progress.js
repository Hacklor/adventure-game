import { ANSWER_QUESTION } from '../actions/actions'

export default function progress(state = [], action) {
  switch(action.type) {
    case ANSWER_QUESTION:
      const questionId = action.questionId
      const answerId = action.answerId

      return Object.assign({}, state, {
        answers: [
          {
            questionId,
            answerId
          },
          ...state.answers

        ]
      });
      break;
  }
  return state;
}
