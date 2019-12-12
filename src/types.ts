export interface IQuizStore {
  points: number;
  isStarted: boolean;
  isEnded: boolean;
  startedAt: Date;
  endedAt: Date;
  questionIndex: number;
  answers: Array<number>;
  selectedAnswer: any;
  answersValue: String;
}

export interface IQuestionList {
  quiz: IQuizStore;
}

export interface IQuizNavigation {
  quiz: IQuizStore;
  //actions: any;
}

export interface IQuizContent {
  quiz: IQuizStore;
}

export interface IQuizNavbar {
  quiz: IQuizStore;
}

export interface IQuizStart {
}

export interface IQuizEnd {
  quiz: IQuizStore;
}

export interface IQuestion {
  index: number;
}

export interface IAnswers {
  index: number;
}
