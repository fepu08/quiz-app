import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AlertItem = ({ msg, type = 'primary' }) => {
  console.log(msg);
  return <Alert variant={type}>{msg}</Alert>;
};

AlertItem.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default AlertItem;
