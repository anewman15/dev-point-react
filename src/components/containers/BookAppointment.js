import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';

function BookAppointment({ currentUser, currentDev }) {
  const page = (
    <div className="has-background-primary vh-100">
      <div className="p-6">
        <h2 className="is-uppercase is-size-3 p-3 has-text-centered has-text-white">
          <span>Set an Appointment with</span>
          <span className="p-2">{`${currentDev.first_name} ${currentDev.last_name}`}</span>
        </h2>
        <div
          className="is-divider has-text-centered has-text-grey-lighter has-text-weight-bolder"
        >
          . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . .
          . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . .
        </div>
        <div className="my-5 has-text-white has-text-centered">
          <p className="m-4">
            If this is your first appointment with
            {` ${currentDev.first_name}, `}
            please make sure
            this is a short introduction call (of around 15-20 minutes), to have
            a useful conversation so that you can build on that later on
          </p>
          <p className="m-4">
            You can get to know each other, by talking about the skills the developer
            has, the product you want built or the stack you have
          </p>
        </div>
      </div>
      <AppointmentForm devId={currentDev.id} devConfLink={currentDev.links[2].url} />
    </div>
  );

  const content = currentUser.id ? page : <Redirect to="/login" />;

  return content;
}

BookAppointment.propTypes = {
  currentUser: PropTypes.object,
  currentDev: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  currentDev: state.currentDev,
});

export default connect(mapStateToProps)(BookAppointment);
