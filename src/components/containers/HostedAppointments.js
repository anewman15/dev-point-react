import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { formattedDate, timeLeft } from '../../utils/date';

function HostedAppointments({ hostedAppointments }) {
  const appointmentsList = hostedAppointments && hostedAppointments.map(appointment => (
    <div key={`${appointment.id}`} className="box-primary">
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-center">
            <p className="px-1 mx-3 is-size-7 has-text-success has-text-weight-bold">
              {appointment.location}
            </p>
            <p className="px-1 mx-3 is-size-7">
              <span className="pr-2 has-text-success has-text-weight-bold">Confirmed:</span>
              <span className="has-text-primary">{appointment.confirmed ? 'Yes' : 'Not yet'}</span>
            </p>
          </div>
        </div>
        <div className="column is-one-third is-right">
          <div className="is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
            <a href={`${appointment.video_conf_link}`} className="button is-primary is-small is-rounded" target="_blank" rel="noreferrer">
              Video Call Link
            </a>
          </div>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column is-half is-centered">
          <p className="px-1 is-size-3 has-text-weight-bold">
            <Link className="has-text-dark" to={`/developers/${appointment.guest.id}`}>{`${appointment.guest.first_name} ${appointment.guest.last_name}`}</Link>
          </p>
        </div>
        <div className="column is-half">
          <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-center">
            <p className="my-2">
              {formattedDate(appointment.time)}
            </p>
            <p className="my-2">
              <span>Time left: </span>
              <span className="px-2 has-text-weight-bold">{`${timeLeft(appointment.time)}`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mx-1 columns is-centered">
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
