import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { prefix } from '../../config';
import title from '../../img/title.png';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { getQuestions } from '../../actions/questionActions';
import Alerts from '../layout/alert/Alerts';
import PropTypes from 'prop-types';
import { QUESTIONS_ERROR } from '../../actions/types';

const Home = ({
  questions: { questions, loading },
  setAlert,
  getQuestions
}) => {
  useEffect(() => {
    document.body.id = 'gb1';
    getQuestions();
    //eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    if (noQuestions()) {
      e.preventDefault();
      setAlert(alert);
    }
  };

  const noQuestions = () => {
    if (!loading && questions && questions.length === 0) return true;
    else return false;
  };

  return (
    <div className='menu flex-center-center-column'>
      <div id='title-img-container' className='d-none d-sm-block'>
        <img src={title} alt='I am Smarticus' />
      </div>
      <Alerts />
      <Link
        to={`${prefix}/name`}
        className='btn btn-primary btn-block btn-menu'
        onClick={onClick}
      >
        Start Quiz
      </Link>
      <Link
        to={`${prefix}/questions`}
        className='btn btn-secondary btn-block btn-menu'
      >
        Edit Questions
      </Link>
      <Link
        to={`${prefix}/leaderboard`}
        className='btn btn-danger btn-block btn-menu'
      >
        Leader Board
      </Link>
    </div>
  );
};

Home.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  questions: state.questions
});

export default connect(mapStateToProps, {
  setAlert,
  getQuestions
})(Home);
