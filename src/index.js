import React from 'react';
import { render } from 'react-dom';

// Import the CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Question from './components/Question';

// Import React Router Dependencies
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// Import store and history
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Question}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
