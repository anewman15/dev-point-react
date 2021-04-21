/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import getAppointments from '../../sandbox/getAppointments';
import saveAppointments from '../../redux/actions/appointment';
import HostedAppointments from './HostedAppointments';

function AppoinmentsPage({ currentUser, appointments, saveAppointments }) {
  useEffect(() => {
    let isCancelled = false;
    isCancelled = !(Object.keys(currentUser).length > 0);

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

  const content = currentUser.id ? page : <Redirect to="/login" />;

  return content;
}

AppoinmentsPage.propTypes = {
  currentUser: PropTypes.object,
  appointments: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  appointments: state.appointments,
});

export default connect(mapStateToProps, { saveAppointments })(AppoinmentsPage);
