import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { prefix } from '../../config';
import { connect } from 'react-redux';
import { setName, clearUser } from '../../actions/userActions';
import { setAlert } from '../../actions/alertActions';
import PropTypes from 'prop-types';

import Alerts from '../layout/alert/Alerts';

const NameForm = ({ user: { name }, setName, clearUser, setAlert }) => {
  const onChange = (e) => {
    setName(e.target.value);
  };

  const checkForm = (e) => {
    if (name === '') {
      e.preventDefault();
      const alert = {
        msg: 'Please insert your name',
        type: 'danger'
      };
      setAlert(alert);
    }
  };
  return (
    <div className='menu flex-center-center-column'>
      <div className='name-alert'>
        <Alerts />
      </div>
      <Form className='bg-primary name-form'>
        <Form.Group controlId='name'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            className='form-rounded'
            onChange={onChange}
            value={name}
          />
        </Form.Group>
        <div className='d-flex justify-content-between px'>
          <Link
            to={`${prefix}/`}
            className='btn btn-danger btn-rounded'
            onClick={clearUser}
          >
            Back
          </Link>
          <Link
            to={`${prefix}/quiz`}
            type='submit'
            className='btn btn-success btn-rounded'
            style={{ width: '11rem' }}
            onClick={checkForm}
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
  setName: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, {
  setName,
  clearUser,
  setAlert
})(NameForm);
