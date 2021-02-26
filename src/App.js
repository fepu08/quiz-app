import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import { prefix } from './config';
import { Container, Row } from 'react-bootstrap';

import Home from './components/pages/Home';
import NameForm from './components/pages/NameForm';
import Leaderboard from './components/leaderboard/Leaderboard';
import Questions from './components/questions/Questions';
import QuizMenu from './components/quiz/QuizMenu';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path={`${prefix}/`} component={Home} />
          <Route exact path={`${prefix}/name`} component={NameForm} />
          <PrivateRoute exact path={`${prefix}/quiz`} component={QuizMenu} />
          <Route exact path={`${prefix}/leaderboard`} component={Leaderboard} />
          <Route exact path={`${prefix}/questions`} component={Questions} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
