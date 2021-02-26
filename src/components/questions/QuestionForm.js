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
  const [answers, setAnswers] = useState(['', '', '', '']);

  useEffect(() => {
    if (current) {
      setQuestion(current.question);
      setAnswers(current.answers);
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
      console.log(answers[0].answer);
    } else {
      console.log('Input error');
    }
  };

  const setAnswerText = (id, text) => {
    let result = [...answers];
    result[id] = text;
    setAnswers(result);
  };

  const setCorrectAnswer = (id) => {
    let result = ['', '', '', ''];
    for (let i = 0; i < answers.length; i++) {
      let newAnsw = {
        answer: '',
        correct: false
      };
      if (i === id) newAnsw.correct = true;
      result[i] = newAnsw;
    }
  };

  const clearFields = () => {
    setQuestion('');
    setAnswers(['', '', '', '']);
  };

  const validateForm = () => {
    if (question === '' || answers.length !== 4) return false;
    answers.forEach((answer) => {
      if (answer === '') {
        return false;
      }
    });
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

      <h5 className='form-label mt-3'>Answer</h5>
      <Row className='w-100 my-2'>
        <Col xs>
          <Form.Control
            className='form-rounded'
            type='text'
            placeholder='Enter your answer'
            value={answers[0].answer}
            onChange={(e) => setAnswerText(0, e.target.value)}
          />
        </Col>
        <Col xs={1}>
          <Form.Check
            type='radio'
            name='right-answer'
            id='answer0-radio'
            value={answers[0].correct}
            checked={answers[0].correct}
            onChange={setCorrectAnswer(0)}
          />
        </Col>
      </Row>
      <Row className='w-100  my-2'>
        <Col xs>
          <Form.Control
            className='form-rounded'
            type='text'
            placeholder='Enter your answer'
            value={answers[1].answer}
            onChange={(e) => setAnswerText(1, e.target.value)}
          />
        </Col>
        <Col xs={1}>
          <Form.Check
            type='radio'
            name='right-answer'
            id='answer1-radio'
            value={answers[1].correct}
            checked={answers[1].correct}
            onChange={setCorrectAnswer(1)}
          />
        </Col>
      </Row>
      <Row className='w-100  my-2'>
        <Col xs>
          <Form.Control
            className='form-rounded'
            type='text'
            placeholder='Enter your answer'
            value={answers[2].answer}
            onChange={(e) => setAnswerText(2, e.target.value)}
          />
        </Col>
        <Col xs={1}>
          <Form.Check
            type='radio'
            name='right-answer'
            id='answer2-radio'
            value={answers[2].correct}
            checked={answers[2].correct}
            onChange={setCorrectAnswer(2)}
          />
        </Col>
      </Row>
      <Row className='w-100  my-2'>
        <Col xs>
          <Form.Control
            className='form-rounded'
            type='text'
            placeholder='Enter your answer'
            value={answers[3].answer}
            onChange={(e) => setAnswerText(3, e.target.value)}
          />
        </Col>
        <Col xs={1}>
          <Form.Check
            type='radio'
            name='right-answer'
            id='answer4-radio'
            value={answers[3].correct}
            checked={answers[3].correct}
            onChange={setCorrectAnswer(3)}
          />
        </Col>
      </Row>
      <Row className='my-2'>
        <Col>
          <Button
            variant='primary'
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
            variant='success'
            block
            className='btn-rounded'
            onClick={onSubmit}
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
