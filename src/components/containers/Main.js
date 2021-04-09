/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import validateSession from '../../sandbox/validateSession';
import { saveAuthStatus } from '../../redux/actions/user';
import Home from './Home';
import LandingPage from './LandingPage';

function Main({ authStatus, saveAuthStatus }) {
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);

  useEffect(() => {
    let cancelValidation = false;
    if (!cancelValidation) {
      validateSession()
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            setIsLoggedIn(true);
            saveAuthStatus({ status: true });
          }
        });
    }
    return () => {
      cancelValidation = true;
    };
  }, []);

  const content = authStatus ? <Home /> : <LandingPage />;

  return content;
}

Main.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { saveAuthStatus })(Main);
