export const addPoints = (value: number) => {
  return {
    type: "POINTS_ADD",
    payload: value
  }
}

export const startQuiz = () => {
  return {
    type: "QUIZ_START"
  }
}

export const endQuiz = () => {
  return {
    type: "QUIZ_END"
  }
}

export const nextQuestion = () => {
  return {
    type: "QUESTION_NEXT"
  }
}

export const prevQuestion = () => {
  return {
    type: "QUESTION_PREV"
  }
}

export const pushAnswer = () => {
  return {
    type: "ANSWER_ADD"
  }
}

export const changeAnswer = (value: String) => {
  return {
    type: "ANSWER_CHANGE",
    payload: value
  }
}

export const resetAnswer = () => {
  return {
    type: "ANSWER_RESET",
  }
}
