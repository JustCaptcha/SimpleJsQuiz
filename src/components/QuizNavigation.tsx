import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { IQuizNavigation } from '../types';
import { quizData } from './quizData';
import {nextQuestion, startQuiz, endQuiz, pushAnswer, addPoints, resetAnswer} from '../store/actions/quizActions';
import {bindActionCreators} from 'redux';
import { style, classes } from './QuizNavigation.st.css';

const QuizNavigation: React.FunctionComponent<any> = props  => {
  const startQuiz = () => {
    props.startQuiz();
  }

  const nextQuestion = () => {
    let question = quizData.questions[props.quiz.questionIndex];
    if(props.quiz.questionIndex < quizData.questions.length - 1) {
      console.log('next question');
      props.nextQuestion();
      props.quiz.selectedAnswer
      question.answers.map((answer) => {
        if(answer.title == props.quiz.selectedAnswer) {
          if(answer.isValid) props.addPoints(question.reward);
        }
      });
      props.resetAnswer();
    } else {

      question.answers.map((answer) => {
        if(answer.title == props.quiz.selectedAnswer) {
          if(answer.isValid) props.addPoints(question.reward);
        }
      });
      props.endQuiz();
    }
  }

  const startButton = (!props.quiz.isStarted) ?
    <Button variant='contained' color='primary' onClick={startQuiz}>Start!</Button> : ''

  const navigation = (props.quiz.isStarted && !props.quiz.isEnded) ? (
    <div>
      <Button onClick={nextQuestion}>Next</Button>
    </div>
  ) : '';

  return (
    <div className={style(classes.root)}>
      {startButton}
      {navigation}
    </div>
  )
}


function mapStateToProps(state: any) {
  return {
    quiz: state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    nextQuestion: bindActionCreators(nextQuestion, dispatch),
    startQuiz: bindActionCreators(startQuiz, dispatch),
    endQuiz: bindActionCreators(endQuiz, dispatch),
    pushAnswer: bindActionCreators(pushAnswer, dispatch),
    addPoints: bindActionCreators(addPoints, dispatch),
    resetAnswer: bindActionCreators(resetAnswer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizNavigation);
