import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const Alert = props => {
  const {alerts} = props;

  return (<div className="alert-wrapper">
  {alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.message}
    </div>
  ))}
</div>)
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert);