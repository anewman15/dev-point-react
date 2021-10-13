/* eslint-disable jsx-a11y/no-autofocus */
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import createAppointment from '../../sandbox/createAppointment';

function AppointmentForm({ devId, devConfLink }) {
  const initAppointmentInfo = {
    appointment_guest_id: devId,
    location: '',
    time: '',
    video_conf_link: devConfLink,
  };

  const [appoinmentInfo, setAppointmentInfo] = useState(initAppointmentInfo);
  const history = useHistory();

  const handleChange = e => {
    setAppointmentInfo({
      ...appoinmentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createAppointment(appoinmentInfo)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'created') {
          setAppointmentInfo(initAppointmentInfo);
          history.push('/appointments');
        }
      });
  };

  return (
    <div className="container my-6 mx-auto p-6 bg-warning-500 bg-opacity-60 rounded">
      <h2 className="text-l md:text-xl text-primary-800 text-center font-semibold">Book an Appointment</h2>

      <hr className="my-4 border-1 border-primary-600" />

      <div className="flex flex-wrap justify-start items-center">
        <form className="" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="location">
              Location
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="location"
                  onChange={handleChange}
                  placeholder="A place, or just Online"
                  required
                  autoFocus
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor="time">
              Time
              <div className="control">
                <input
                  type="datetime-local"
                  className="input"
                  name="time"
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </div>
          <div className="control">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

AppointmentForm.propTypes = {
  devId: PropTypes.integer,
  userId: PropTypes.integer,
}.isRequired;

export default AppointmentForm;
