import React, { useEffect } from 'react';
import QuestionItem from './QuestionItem';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/questionActions';
import PropTypes from 'prop-types';

const Questions = ({ questions: { questions, current }, getQuestions }) => {
  useEffect(() => {
    document.body.id = 'bb1';
    getQuestions();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Questions</h1>

      <ul className='question-list'>
        {questions !== null && questions.length !== 0 ? (
          questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))
        ) : (
          <h3>No questions to show</h3>
        )}
      </ul>
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
