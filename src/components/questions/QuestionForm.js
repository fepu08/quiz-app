import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  addQuestion,
  updateQuestion,
  clearCurrent
} from '../../actions/questionActions';
import PropTypes from 'prop-types';
import { validate } from 'uuid';

const QuestionForm = ({
  current,
  addQuestion,
  updateQuestion,
  clearCurrent
}) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([
    { id: 1, answer: '', correct: false },
    { id: 2, answer: '', correct: false },
    { id: 3, answer: '', correct: false },
    { id: 4, answer: '', correct: false }
  ]);

  useEffect(() => {
    if (current) {
      setQuestion(current.question);
      setAnswers(current.answers);
    } else {
      clearFields();
    }
  }, [current]);

  const onSubmit = () => {
    if (validateForm()) {
      let newQuestion = {
        question,
        answers
      };

      if (current !== null) {
        // UPDATE QUESTION
        newQuestion.id = current.id;
        updateQuestion(newQuestion);
      } else {
        // ADD QUESTION
        addQuestion(newQuestion);
      }
      clearFields();
      clearCurrent();
    } else {
      console.log('Input error');
    }
  };

  const setAnswerText = (id, text) => {
    let result = [...answers];
    result.find((a) => a.id === id).answer = text;
    setAnswers(result);
  };

  const setCorrectAnswer = (id) => {
    let result = [];
    answers.map((a) => {
      if (a.id === id) {
        result.push({ id: a.id, answer: a.answer, correct: true });
      } else {
        result.push({ id: a.id, answer: a.answer, correct: false });
      }
    });
    setAnswers(result);
  };

  const clearFields = () => {
    setQuestion('');
    setAnswers([
      { id: 1, answer: '', correct: false },
      { id: 2, answer: '', correct: false },
      { id: 3, answer: '', correct: false },
      { id: 4, answer: '', correct: false }
    ]);
  };

  const validateForm = () => {
    if (!question || question === '' || !answers || answers.length !== 4)
      return false;
    let thereIsACorrect = false;
    for (let i = 0; i < answers.length; i++) {
      if (!answers[i].id) return false;
      if (!answers[i].answer || answers[i].answer === '') return false;
      if (answers[i].correct !== true && answers[i].correct !== false)
        return false;
      if (answers[i].correct === true) thereIsACorrect = true;
    }
    if (!thereIsACorrect) return false;
    return true;
  };

  return (
    <Form className='question-form flex-center-center-column'>
      <h5 className='form-label'>Question</h5>
      <Row className='w-100 my-2'>
        <Col>
          <Form.Control
            type='text'
            placeholder='Enter your question'
            className='form-rounded'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Col>
      </Row>

      <h5 className='form-label mt-3'>Answers</h5>
      {/* Answers */}
      {answers.map((a) => {
        return (
          <Row className='w-100 my-2' key={a.id}>
            <Col xs>
              <Form.Control
                className='form-rounded'
                type='text'
                placeholder='Enter your answer'
                value={a.answer}
                onChange={(e) => setAnswerText(a.id, e.target.value)}
              />
            </Col>
            <Col xs={1}>
              <Form.Check
                type='radio'
                name='right-answer'
                id='answer0-radio'
                value={a.correct}
                checked={a.correct}
                onChange={() => setCorrectAnswer(a.id)}
              />
            </Col>
          </Row>
        );
      })}

      {/* Buttons */}
      <Row className='my-2'>
        <Col>
          <Button
            variant='danger'
            block
            className='btn-rounded'
            onClick={() => {
              clearCurrent();
              clearFields();
            }}
          >
            Clear
          </Button>
        </Col>
        <Col>
          <Button
            variant={!validateForm() ? 'dark' : 'success'}
            block
            className='btn-rounded'
            onClick={onSubmit}
            disabled={!validateForm()}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

QuestionForm.propTypes = {
  current: PropTypes.object,
  addQuestion: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  current: state.questions.current
});

export default connect(mapStateToProps, {
  addQuestion,
  updateQuestion,
  clearCurrent
})(QuestionForm);
