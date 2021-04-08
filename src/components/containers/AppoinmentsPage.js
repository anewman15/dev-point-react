/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import getAppointments from '../../sandbox/getAppointments';
import saveAppointments from '../../redux/actions/appointment';
import HostedAppointments from './HostedAppointments';

function AppoinmentsPage({ authStatus, appointments, saveAppointments }) {
  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      getAppointments()
        .then(response => response.json())
        .then(data => {
          saveAppointments(data.appointments);
        });
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  const page = (
    <div>
      <div className="my-4 has-text-centered">
        <h1 className="is-size-2 has-text-success has-text-weight-bold">Your Appointments</h1>
      </div>
      <HostedAppointments hostedAppointments={appointments.hosted} />
    </div>
  );

  const content = authStatus ? page : <Redirect to="/login" />;

  return content;
}

AppoinmentsPage.propTypes = {
  authStatus: PropTypes.bool,
  appointments: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
  appointments: state.appointments,
});

export default connect(mapStateToProps, { saveAppointments })(AppoinmentsPage);
