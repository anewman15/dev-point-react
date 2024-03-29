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

  return (
    <div className="page-container bg-gray-50 page-border page-shadow">
      <div className="m-6 pt-8">
        <h1 className="page-title">Your Appointments</h1>
      </div>
      <div className="mx-auto my-12 pb-8">
        {
          appointments.hosted && appointments.hosted.length
            ? <HostedAppointments hostedAppointments={appointments.hosted} />
            : <p className="text-xl text-gray-400 text-center font-bold">None yet</p>

        }
      </div>
    </div>
  );
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
