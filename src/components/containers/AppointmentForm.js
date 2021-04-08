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
          history.push('/');
        }
      });
  };

  return (
    <form className="mx-6 mt-4 pb-6" onSubmit={handleSubmit}>
      <div className="columns is-centered">
        <div className="column is-four-fifths">
          <div className="mx-6 field is-horizontal">
            <div className="field-body is-grouped">
              <div className="field">
                <label className="label has-text-centered has-text-white" htmlFor="location">
                  Location
                  <div className="control">
                    <input
                      type="text"
                      className="input is-primary is-rounded has-text-success"
                      name="location"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>
              </div>
              <div className="field is-horizontal">
                <label className="label has-text-centered has-text-white" htmlFor="time">
                  Time
                  <div className="control">
                    <input
                      type="datetime-local"
                      className="input is-primary is-rounded has-text-success"
                      name="time"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-vcentered">
          <div className="mx-6 field is-horizontal is-vcentered">
            <div className="control">
              <button
                type="submit"
                className="button is-white has-text-success is-rounded is-uppercase is-fullwidth mt-4 p-5 has-text-weight-bold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

AppointmentForm.propTypes = {
  devId: PropTypes.integer,
  userId: PropTypes.integer,
}.isRequired;

export default AppointmentForm;
