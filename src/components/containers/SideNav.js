/* eslint-disable react/self-closing-comp */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import NavItemsSignedOut from '../presentational/NavItemsSignedOut';
import NavItemsLoggedIn from './NavItemsLoggedIn';

function SideNav({ authStatus }) {
  return (
    <nav id="side-nav" className="navbar-menu my-5">
      <div className="menu-list">
        {authStatus ? <NavItemsLoggedIn /> : <NavItemsSignedOut /> }
      </div>
    </nav>
  );
}

SideNav.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps)(SideNav);
