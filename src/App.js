import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { prefix } from './config';
import { Container, Row } from 'react-bootstrap';

import Home from './components/pages/Home';
import NameForm from './components/pages/NameForm';
import Leaderboard from './components/leaderboard/Leaderboard';
import Questions from './components/questions/Questions';

const App = () => {
  return (
    <Router>
      <Container>
        <div className='menu d-flex flex-column justify-content-center align-items-center'>
          <Switch>
            <Route exact path={`${prefix}/`} component={Home} />
            <Route exact path={`${prefix}/name`} component={NameForm} />
            <Route
              exact
              path={`${prefix}/leaderboard`}
              component={Leaderboard}
            />
            <Route exact path={`${prefix}/questions`} component={Questions} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default App;
