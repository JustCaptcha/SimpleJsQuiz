import React from 'react';
import { classes, style } from './header.st.css';
import { Typography, Container, Grid } from '@material-ui/core';
import { ConsolePointer } from '../console/console';
import {connect} from 'react-redux';
import {IQuizStore} from '../../types';

export interface IHeaderProps {
    className?: string;
    quiz: IQuizStore;
}

export const Header: React.FunctionComponent<IHeaderProps> = props => {
  let points = (props.quiz.isStarted) ?
    <Typography variant='h5'>Points: {props.quiz.points}</Typography> : '';

  return (
    <header className={style(classes.root, props.className)}>
      <Container>
        <Grid container alignItems='center' justify='center' direction='column'>
          <Grid container item xs={12} justify='center' alignItems='center'>
            <div className={style(classes.titleGroup)}>
              <Typography className={style(classes.title)} variant='h4'>Tech Quiz</Typography>
              <ConsolePointer variant='h4'/>
            </div>
          </Grid>
          <Grid container item xs={12} justify='center' alignItems='center'>
            <div className={style(classes.points)}>
              {points}
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
);
}

function mapStateToProps(state:any) {
  return {
    quiz: state
  }
}

export default connect(mapStateToProps)(Header);
