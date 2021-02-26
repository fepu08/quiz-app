import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCurrent, deleteQuestion } from '../../actions/questionActions';
import PropTypes from 'prop-types';

const QuestionItem = ({
  user,
  question,
  deleteQuestion,
  setCurrent,
  setScore
}) => {
  const onDelete = () => {
    deleteQuestion(question.id);
  };

  return (
    <li className='question-item d-flex justify-content-between'>
      <div className='question-item-text'>{question.question}</div>
      <div>
        <Button
          variant={'outline-danger'}
          className='question-btn question-delete-btn'
          onClick={onDelete}
        >
          <i className='fas fa-trash'></i>
        </Button>
        <Button
          variant={'outline-info'}
          className='question-btn question-edit-btn'
          onClick={() => {
            setCurrent(question);
          }}
        >
          <i className='far fa-edit'></i>
        </Button>
      </div>
    </li>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, {
  setCurrent,
  deleteQuestion
})(QuestionItem);
