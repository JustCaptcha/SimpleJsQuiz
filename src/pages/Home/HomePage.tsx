import React from 'react';
import { Layout } from '../../components/layout/layout';
import { Typography } from '@material-ui/core';
import QuestionList from '../../components/QuestionList';

export const HomePage: React.FunctionComponent = props => {
    return (
        <Layout>
          <QuestionList />
            {/* <Typography variant='h1'>Hello world</Typography> */}
        </Layout>
    )
}
