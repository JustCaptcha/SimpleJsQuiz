import { createStore } from 'redux';
import { quizReducer } from './reducers/quiz';

export const store = createStore(
  quizReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
