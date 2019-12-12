import React from 'react';
import { connect } from 'react-redux';
import QuizNavigation from './QuizNavigation';
import QuizContent from './QuizContent';
import { quizData } from './quizData';
import { Paper, Typography, Button } from '@material-ui/core';
import { style, classes } from './QuestionList.st.css';
import { IQuizStart, IQuestionList } from '../types';
import JSLogo from '../static/svg/logos/Unofficial_JavaScript_logo_2.svg';



const QuestionList: React.FunctionComponent<IQuestionList> = props => {
  console.log(props.quiz.isStarted);
  let scene = (props.quiz.isStarted) ? <QuizContent/> : <QuizStart/>;
  return (
    <Paper className={style(classes.root)}>
      {scene}
      <QuizNavigation />
    </Paper>
  );
}

const QuizStart: React.FunctionComponent<IQuizStart> = props => {
  return (
    <div className={style(classes.quizStart)}>
      <Typography variant='h3'>{quizData.title}</Typography>
      <img className={style(classes.jsLogo)} src={JSLogo}></img>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    quiz: state
  }
}

export default connect(mapStateToProps)(QuestionList);
