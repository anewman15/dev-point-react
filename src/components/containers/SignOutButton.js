/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { saveAuthStatus } from '../../redux/actions/user';
import endSession from '../../sandbox/endSession';

function SignOutButton({ authStatus, saveAuthStatus }) {
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    endSession()
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(false);
          saveAuthStatus({ status: false });
          history.push('/');
        }
      });
  };

  return (
    <div className="navbar-item">
      <Link to="/" onClick={handleClick} className="button is-primary">
        Sign Out
      </Link>
    </div>
  );
}

SignOutButton.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { saveAuthStatus })(SignOutButton);
