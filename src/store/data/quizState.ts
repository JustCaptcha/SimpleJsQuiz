import {IQuizStore} from '../../types'

export const quizState: IQuizStore = {
  points: 0,
  isStarted: false,
  isEnded: false,
  startedAt: {} as Date,
  endedAt: {} as Date,
  questionIndex: 0,
  answers: [],
  selectedAnswer: {},
  answersValue: ''
}
