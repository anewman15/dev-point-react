import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function HostedAppointments({ hostedAppointments }) {
  const appointmentsList = hostedAppointments && hostedAppointments.map(appointment => (
    <div key={`${appointment.id}`} className="box-primary">
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <p className="px-1 mx-3 is-size-7 has-text-success has-text-weight-bold">
          {appointment.location}
        </p>
        <a href={`${appointment.video_conf_link}`} className="button is-primary is-small is-rounded" target="_blank" rel="noreferrer">
          Video Call Link
        </a>
      </div>
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <p className="px-1 mx-3 is-size-3 has-text-weight-bold">
          <Link className="has-text-dark" to={`/developers/${appointment.guest.id}`}>{`${appointment.guest.first_name} ${appointment.guest.last_name}`}</Link>
        </p>
        <p>
          {appointment.time}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="mx-6 columns is-centered">
      <div className="column">
        {appointmentsList}
      </div>
    </div>
  );
}

HostedAppointments.propTypes = {
  hostedAppointments: PropTypes.array,
}.isRequired;

export default HostedAppointments;
