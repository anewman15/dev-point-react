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
    <div className="container mx-auto">
      <div className="m-6">
        <h1 className="text-2xl md:text-4xl text-primary-800 text-center font-bold">Your Appointments</h1>
      </div>
      <div className="mx-auto my-12">
        {
          appointments.hosted.length
            ? <HostedAppointments hostedAppointments={appointments.hosted} />
            : <p className="text-xl text-gray-400">None yet.</p>
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
