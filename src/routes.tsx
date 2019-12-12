import React from 'react';
import { mount, route } from 'navi';
import { HomePage } from './pages/Home/HomePage';

export const routes = mount({
    '/SimpleJsQuiz': route({
        title: 'Home page',
        view: <HomePage />
    }),
})

