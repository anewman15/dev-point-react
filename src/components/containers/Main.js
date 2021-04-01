/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import validateSession from '../../sandbox/validateSession';
import { saveAuthStatus } from '../../redux/actions/user';
import LandingPage from './LandingPage';
import LogInForm from './LogInForm';

function Main({ authStatus, saveAuthStatus }) {
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);

  useEffect(() => {
    let cancelValidation = false;
    if (!cancelValidation) {
      validateSession()
        .then(response => {
          if (response.status === 200) {
            setIsLoggedIn(true);
            saveAuthStatus({ status: true });
          } else {
            setIsLoggedIn(false);
            saveAuthStatus({ status: false });
            console.log(response);
          }
        });
    }
    return () => {
      cancelValidation = true;
    };
  }, []);

  return (
    isLoggedIn ? <LandingPage /> : <LogInForm />
  );
}

Main.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { saveAuthStatus })(Main);
