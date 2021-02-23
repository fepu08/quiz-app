import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { prefix } from './config';
import { Container, Row } from 'react-bootstrap';
import './App.css';

import Home from './components/pages/Home'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Switch>
            <Route exact path={`${prefix}/`} component={Home}/>
            <Route exact path={`${prefix}/quiz`} />
            <Route exact path={`${prefix}/leaderboard`} />
            <Route exact path={`${prefix}/questions`} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
