import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { alert_timeout } from '../../../config';
import { removeAlert } from '../../../actions/alertActions';

const AlertItem = ({
  alert: { id, msg, type = 'primary' },
  timeout = alert_timeout,
  removeAlert
}) => {
  useEffect(() => {
    setTimeout(() => {
      removeAlert({ id, msg });
    }, timeout);
    //eslint-disable-next-line
  }, []);
  return <Alert variant={type}>{msg}</Alert>;
};

AlertItem.propTypes = {
  alert: PropTypes.object.isRequired,
  timeout: PropTypes.number,
  removeAlert: PropTypes.func.isRequired
};

export default connect(null, { removeAlert })(AlertItem);
