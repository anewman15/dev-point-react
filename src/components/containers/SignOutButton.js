/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveAuthStatus } from '../../redux/actions/user';
import endSession from '../../sandbox/endSession';

function SignOutButton({ authStatus, saveAuthStatus }) {
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    endSession()
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(false);
          saveAuthStatus({ status: false });
          history.push('/');
        } else {
          console.log(response);
        }
      });
  };

  return (
    <div className="navbar-item">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="button is-primary">Sign Out</button>
      </form>
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
