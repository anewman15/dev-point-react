/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import createAppointment from '../../sandbox/createAppointment';

function AppointmentForm({ currentDev }) {
  const initAppointmentInfo = {
    location: '',
    time: '',
  };

  const [appoinmentInfo, setAppointmentInfo] = useState(initAppointmentInfo);
  const history = useHistory();

  const handleChange = e => {
    setAppointmentInfo({
      appointment_guest_id: currentDev.id,
      ...appoinmentInfo,
      [e.target.name]: e.target.value,
      video_conf_link: currentDev.links[2].url,
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
    Object.keys(currentDev).length >= 1
      && (
      <div className="container my-6 mx-auto p-6 bg-warning-500 bg-opacity-60 rounded">
        <h2 className="text-l md:text-xl text-primary-800 text-center font-semibold">Book an Appointment</h2>

        <hr className="my-4 border-1 border-primary-600" />

        <div className="flex flex-wrap justify-start items-center">
          <form className="" onSubmit={handleSubmit}>
            <div className="md:flex md:justify-between md:items-center md:space-x-2 lg:space-x-0 lg:block">
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
      )
  );
}

AppointmentForm.propTypes = {
  currentDev: PropTypes.object,
}.isRequired;

const mapStateToProps = state => (
  {
    currentDev: state.currentDev,
  }
);

export default connect(mapStateToProps)(AppointmentForm);
