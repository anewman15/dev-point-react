/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import saveCurrentUser from '../../redux/actions/user';
import saveAppointments from '../../redux/actions/appointment';
import { saveDevelopers, saveCurrentDev } from '../../redux/actions/developer';
import endSession from '../../sandbox/endSession';

function SignOutButton(
  {
    saveCurrentUser,
    saveAppointments,
    saveDevelopers,
    saveCurrentDev,
  },
) {
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    endSession()
      .then(response => {
        if (response.status === 200) {
          saveCurrentUser({});
          saveAppointments({});
          saveDevelopers([]);
          saveCurrentDev({});
          history.push('/');
        }
      });
  };

  return (
    <div className="navbar-item">
      <Link to="/" onClick={handleClick} className="btn btn-danger">
        Sign Out
      </Link>
    </div>
  );
}

SignOutButton.propTypes = {
  currentUser: PropTypes.bool,
}.isRequired;

export default connect(
  null,
  {
    saveCurrentUser,
    saveDevelopers,
    saveAppointments,
    saveCurrentDev,
  },
)(SignOutButton);
