import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import progress from './progress'

const rootReducer = combineReducers({
    progress,
    routing: routerReducer
});

export default rootReducer;
