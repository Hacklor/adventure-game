import story from '../data/story';
import { ANSWER_QUESTION, NEXT_QUESTION } from '../actions/actions'

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
    case NEXT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: story.next(action.questionId, action.answerId)
      });
      break;

    default:
      return state;
      break;
  }
}
