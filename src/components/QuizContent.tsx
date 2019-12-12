import React from 'react';
import { connect } from 'react-redux';
import { quizData } from './quizData';
import {Typography, Button} from '@material-ui/core';
import {IQuestion} from '../types';
import { style, classes } from './QuizContent.st.css';
import QuizAnswers from './QuizAnswers';

const QuizContent: React.FunctionComponent<any> = props => {
  let content = (!props.quiz.isEnded) ? <Question index={props.quiz.questionIndex}/> : <QuizEnd points={props.quiz.points}/>;
  return (
    <div className={style(classes.root)}>
      {content}
    </div>
  );
}

const Question: React.FunctionComponent<IQuestion> = props => {
  let question = quizData.questions[props.index];
  return (
    <div>
      <Typography align='center' variant='h6'>{question.title}</Typography>
      <QuizAnswers />
    </div>
  )
}


const QuizEnd: React.FunctionComponent<any> = props => {
  return (
    <div className={style(classes.quizEnd)}>
      <Typography align='center' variant='h6'>You completed the quiz!</Typography>
      <Typography align='center' variant='h6'>Your score is {props.points} points!</Typography>
    </div>
  )
}


function mapStateToProps(state: any) {
  return {
    quiz: state
  }
}

export default connect(mapStateToProps)(QuizContent);
