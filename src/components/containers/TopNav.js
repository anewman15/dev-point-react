/* eslint-disable react/self-closing-comp */
import PropTypes from 'prop-types';
import React from 'react';
import SignUpButton from '../presentational/SignUpButton';
import SignOutButton from './SignOutButton';

function TopNav({ isLoggedIn }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://guthub.com/anewman15/dev-point">
          <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="dev-lookup-logo" height="256" />
        </a>
        <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true" />
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {isLoggedIn ? <SignOutButton /> : <SignUpButton /> }

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

TopNav.propTypes = {
  isLoggedIn: PropTypes.bool,
}.isRequired;

export default TopNav;
