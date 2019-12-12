import React from 'react';
import { classes, style } from './content.st.css';
import { Typography, Container } from '@material-ui/core';
import { ConsolePointer, ConsoleLog } from '../console/console';

export interface IContentProps {
  className?: string;
  // mainFile: string;
}

export const Content: React.FunctionComponent<IContentProps> = props => (
  <Container className={style(classes.root, props.className)}>
    {props.children}
  </Container>
);
