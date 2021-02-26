import React from 'react';
import { connect } from 'react-redux';
import { prefix } from '../../config';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ user: { name }, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        name === '' ? (
          <Redirect to={`${prefix}/name`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
