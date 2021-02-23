import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { prefix } from './config';
import { Container, Row } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <div className='menu d-flex flex-column justify-content-center align-items-center'>
            <Link to={`${prefix}/quiz`} className='btn btn-primary btn-block btn-menu'>
              Start Quiz
            </Link>
            <Link to={`${prefix}/questions`} className='btn btn-primary btn-block btn-menu'>
              Edit Questions
            </Link>
            <Link to={`${prefix}/leaderboard`} className='btn btn-primary btn-block btn-menu'>
              Leader Board
            </Link>
          </div>
        </Container>
        <Switch>
          <Route exact path={`${prefix}/`} />
          <Route exact path={`${prefix}/quiz`} />
          <Route exact path={`${prefix}/leaderboard`} />
          <Route exact path={`${prefix}/questions`} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
