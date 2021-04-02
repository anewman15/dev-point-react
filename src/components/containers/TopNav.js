/* eslint-disable react/self-closing-comp */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavItemsSignedOut from '../presentational/NavItemsSignedOut';
import NavItemsLoggedIn from './NavItemsLoggedIn';

function TopNav({ authStatus }) {
  const toggleNavbarBurger = () => {
    const navbarMenu = document.getElementById('top-nav');
    navbarMenu.classList.toggle('is-active');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="dev-lookup-logo" height="256" />
        </Link>
        <button type="button" className="navbar-burger" onClick={toggleNavbarBurger} aria-label="menu" aria-expanded="false">
          <span aria-hidden="true" />
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="top-nav" className="navbar-menu">
        <div className="navbar-end">
          {authStatus ? <NavItemsLoggedIn /> : <NavItemsSignedOut /> }
        </div>
      </div>
    </nav>
  );
}

TopNav.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps)(TopNav);
