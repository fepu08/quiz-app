import React, { useEffect } from 'react';
import QuestionItem from './QuestionItem';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/questionActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { prefix } from '../../config';

const Questions = ({ questions: { questions, current }, getQuestions }) => {
  useEffect(() => {
    document.body.id = 'bb1';
    getQuestions();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1>Questions</h1>
        <div className='my-auto'>
          <Link to={`${prefix}/`} className='btn btn-primary btn-rounded'>
            Home
          </Link>
        </div>
      </div>

      <ul className='question-list'>
        {questions !== null && questions.length !== 0 ? (
          questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))
        ) : (
          <h3>No questions to show</h3>
        )}
      </ul>

      <hr className='my-5' />

      <QuestionForm />
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.object.isRequired,
  getQuestions: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  questions: state.questions
});

export default connect(mapStateToProps, { getQuestions })(Questions);
