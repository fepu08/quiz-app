import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertItem from './AlertItem';

const Alerts = ({ alerts }) => {
  return (
    <Fragment>
      {alerts !== undefined &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <AlertItem key={alert.id} msg={alert.msg} type={alert.type} />
        ))}
    </Fragment>
  );
};

Alerts.propTypes = {
  alerts: PropTypes.array
};

const mapStateToProps = (state) => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);
