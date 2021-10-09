import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { formattedDate, timeLeft } from '../../utils/date';

function HostedAppointments({ hostedAppointments }) {
  const appointmentsList = hostedAppointments && hostedAppointments.map(appointment => (
    <div key={`${appointment.id}`} className="container mx-auto my-10 px-8 py-6 w-11/12 md:w-9/12 lg:w-8/12 bg-warning-400 bg-opacity-80 rounded filter drop-shadow-xl">
      <div className="flex flex-wrap justify-between items-center space-x-4">
        <p className="text-sm text-primary-500 font-bold">
          {appointment.location}
        </p>
        <p className="text-sm lowercase">
          <span className="mr-2 text-primary-800 has-text-weight-bold">Confirmed:</span>
          <span className="font-bold">
            {
              appointment.confirmed
                ? <span className="text-primary-500">Yes</span>
                : <span className="text-danger-500">Not yet</span>
            }
          </span>
        </p>
        <div className="">
          <a href={`${appointment.video_conf_link}`} className="bg-primary-500 hover:bg-primary-600 rounded py-1 px-3 text-white text-xs font-bold" target="_blank" rel="noreferrer">
            Video Call Link
          </a>
        </div>
      </div>

      <hr className="border-1 border-warning-200 my-2" />

      <div className="my-4 flex flex-wrap flex-col md:flex-row justify-start items-baseline md:space-x-4 leading-loose">
        <p className="text-2xl md:text-3xl">
          <Link className="text-primary-700 font-semibold" to={`/developers/${appointment.guest.id}`}>{`${appointment.guest.first_name} ${appointment.guest.last_name}`}</Link>
        </p>
        <p className="text-primary-700 text-xl">
          <span className="text-md mr-2"><i className="fas fa-envelope text-primary-400" /></span>
          <span>{ appointment.guest.email }</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <p className="my-2 text-primary-700 flex justify-center items-center">
          <span className="mr-3"><i className="far fa-calendar-alt text-primary-400 text-xl" /></span>
          {formattedDate(appointment.time)}
        </p>
        <p className="my-2 flex justify-center items-center">
          <span className="mr-2"><i className="fas fa-clock text-primary-400 text-xl" /></span>
          <span className="font-bold lowercase">
            {
              timeLeft(appointment.time) === 'Passed'
                ? <span className="text-danger-500">Passed</span>
                : <span className="text-primary-700">{timeLeft(appointment.time)}</span>
            }
          </span>
        </p>
      </div>

      <hr className="border-1 border-warning-200 my-2" />

    </div>
  ));

  return (
    <>
      { appointmentsList }
    </>
  );
}

HostedAppointments.propTypes = {
  hostedAppointments: PropTypes.array,
}.isRequired;

export default HostedAppointments;
