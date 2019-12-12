import React from 'react';
import { connect } from 'react-redux';
import { style, classes } from './QuizAnswers.st.css';
import { bindActionCreators } from 'redux';
import { quizData } from './quizData';
import {Typography, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import {pushAnswer, changeAnswer} from '../store/actions/quizActions';

const QuizAnswers: React.FunctionComponent<any> = props => {
  let answers = quizData.questions[props.quiz.questionIndex].answers;
  const handleChange = (event: any) => {
    props.changeAnswer(event.target.value);
  }

  return (
    <div className={style(classes.root)}>
      <RadioGroup onChange={handleChange}>
      {answers.map((answer) => {
        return <Answer key={answer.title} answer={answer}/>
      })}
      </RadioGroup>
    </div>
  )
}

const Answer: React.FunctionComponent<any> = props => {
  let value = {
   title: props.answer.title,
   isValid: props.answer.isValid
  }
  return (
    <FormControlLabel
      value={props.answer.title}
      control={<Radio/>}
      label={props.answer.title}>
    </FormControlLabel>
  )
}

function mapStateToProps(state: any) {
  return {
    quiz: state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    pushAnswer: bindActionCreators(pushAnswer, dispatch),
    changeAnswer: bindActionCreators(changeAnswer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizAnswers);
