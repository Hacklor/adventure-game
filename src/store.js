import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the Root Reducer
import rootReducer from './reducers/index';

// Default data
import story from './data/story';

const defaultState = {
  questions: story,
  progress: {
    currentQuestion: story[0]
  }
}

const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
