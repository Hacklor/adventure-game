import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions'
import progress from './progress'

const rootReducer = combineReducers({
    questions,
    progress,
    routing: routerReducer
});

export default rootReducer;
