import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { prefix } from '../../config';

import { connect } from 'react-redux';
import { setName } from '../../actions/userActions';
import PropTypes from 'prop-types';

const NameForm = ({ user: { name }, setName }) => {
  const onChange = (e) => {
    name = e.target.value;
  };
  return (
    <div className='menu d-flex flex-column justify-content-center align-items-center'>
      <Form className='bg-primary name-form'>
        <Form.Group controlId='name'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            className='form-rounded'
            onChange={onChange}
          />
        </Form.Group>
        <div className='d-flex justify-content-between px'>
          <Link to={`${prefix}/`} className='btn btn-danger btn-rounded'>
            Back
          </Link>
          <Link
            to={`${prefix}/quiz`}
            type='submit'
            className='btn btn-success btn-rounded'
            style={{ width: '11rem' }}
            onClick={(e) => setName(name)}
          >
            Let's Go
          </Link>
        </div>
      </Form>
    </div>
  );
};

NameForm.propTypes = {
  user: PropTypes.object.isRequired,
  setName: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { setName })(NameForm);
