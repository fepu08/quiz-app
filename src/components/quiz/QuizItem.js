import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCurrentAnswer } from '../../actions/userActions';
import { setScore } from '../../actions/userActions';
import { points_for_correct_answers } from '../../config';
import PropTypes from 'prop-types';

const Quiz = ({
  question: { id, question, answers },
  user: { currentAnswer, score },
  setCurrentAnswer,
  setScore
}) => {
  return (
    <Container fluid>
      <Row className='my-3'>
        {/* The Question */}
        <Col className='quiz-item'>{question}</Col>
      </Row>
      {/* The Answers */}
      <Row className='justify-content-between'>
        {answers.map((a) => (
          <Col
            key={a.id}
            lg={6}
            className={[
              'my-3',
              a.id % 2 === 1 ? 'pr-lg-3 pl-lg-0' : 'pr-lg-0 pl-lg-3'
            ]}
          >
            <Button
              className={[
                'd-block answer-item btn-rounded',
                currentAnswer !== null &&
                  (a.correct
                    ? 'btn-success'
                    : currentAnswer.answerId === a.id
                    ? 'btn-primary'
                    : 'bg-white')
              ]}
              onClick={() => {
                setCurrentAnswer({ questionId: id, answerId: a.id });
                if (a.correct && setScore(score + points_for_correct_answers));
              }}
              disabled={currentAnswer !== null}
            >
              {a.answer}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Quiz.propTypes = {
  question: PropTypes.object.isRequired,
  setCurrentAnswer: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  setScore: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { setCurrentAnswer, setScore })(Quiz);
