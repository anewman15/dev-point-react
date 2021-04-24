/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import saveCurrentUser from '../../redux/actions/user';
import endSession from '../../sandbox/endSession';

function SignOutButton({ saveCurrentUser }) {
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    endSession()
      .then(response => {
        if (response.status === 200) {
          saveCurrentUser({});
          history.push('/');
        }
      });
  };

  return (
    <div className="navbar-item">
      <Link to="/" onClick={handleClick} className="button is-primary is-fullwidth">
        Sign Out
      </Link>
    </div>
  );
}

SignOutButton.propTypes = {
  cyurrentUser: PropTypes.bool,
}.isRequired;

export default connect(null, { saveCurrentUser })(SignOutButton);
