import { quizState } from '../data/quizState';
export function quizReducer (state: any = quizState, action: any) {
  switch(action.type) {
    case 'QUIZ_START': {
      return {
        ...state,
        isStarted: true
      }
    }
    case 'QUIZ_END': {
      return {
        ...state,
        isEnded: true
      }
    }
    case "QUESTION_NEXT": {
      return {
        ...state,
        questionIndex: state.questionIndex += 1
      }
    }
    case "ANSWER_CHANGE": {
      return {
        ...state,
        selectedAnswer: action.payload
      }
    }
    case "ANSWER_RESET": {
      return {
        ...state,
        selectedAnswer: ""
      }
    }
    case "ANSWER_PUSH": {
      return {
        ...state,
      }
    }
    case "POINTS_ADD": {
      return {
        ...state,
        points: state.points += action.payload
      }
    }
    default: return state;
  }
}
