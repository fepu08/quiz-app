import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import QuizItem from './QuizItem';
import { connect } from 'react-redux';
import { clearCurrent, getQuestions } from '../../actions/questionActions';
import { clearCurrentAnswer, clearUser } from '../../actions/userActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { prefix } from '../../config';

const QuizMenu = ({
  questions,
  loading,
  user: { score, currentAnswer },
  getQuestions,
  clearCurrent,
  clearCurrentAnswer,
  clearUser
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    getQuestions();
    //eslint-disable-next-line
  }, []);

  const nextOnClick = () => {
    if (!thisIsTheLastQuestion()) {
      let currIndex = questionIndex;
      setQuestionIndex((currIndex += 1));
      clearCurrentAnswer();
    }
  };

  const thisIsTheLastQuestion = () => {
    if (questionIndex === questions.length - 1) return true;
    else return false;
  };

  const onExit = () => {
    clearUser();
    clearCurrent();
  };

  if (loading || questions === null) {
    return (
      <div className='menu flex-center-center-column'>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className='quiz-menu flex-center-center-column'>
      <QuizItem question={questions[questionIndex]} />
      <div className='w-100 d-flex justify-content-between'>
        <div className='btn-rounded bg-secondary btn-score'>Score: {score}</div>
        {/* Next Button or Leader Board*/}
        {currentAnswer !== null &&
          (!thisIsTheLastQuestion() ? (
            <Button className='d-block btn-rounded' onClick={nextOnClick}>
              Next
            </Button>
          ) : (
            <div>
              <Link
                to={`${prefix}/leaderboard`}
                className='btn btn-info btn-rounded mr-1 mr-sm-3'
                onClick={onExit}
              >
                Leader Board
              </Link>
              <Link
                to={`${prefix}/`}
                className='btn btn-primary btn-rounded'
                onClick={onExit}
              >
                Home
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

QuizMenu.propTypes = {
  questions: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getQuestions: PropTypes.func.isRequired,
  clearCurrentAnswer: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  loading: state.questions.loading,
  user: state.user
});

export default connect(mapStateToProps, {
  getQuestions,
  clearCurrentAnswer,
  clearUser,
  clearCurrent
})(QuizMenu);
