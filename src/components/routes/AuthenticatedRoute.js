/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-else-return */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ currentUser, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => {
        if (currentUser.id) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
    }
  />
);

AuthenticatedRoute.propTypes = {
  currentUser: PropTypes.object,
  component: PropTypes.function,
}.isRequired;

export default AuthenticatedRoute;
