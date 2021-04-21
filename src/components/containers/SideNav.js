/* eslint-disable react/self-closing-comp */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import NavItemsSignedOut from '../presentational/NavItemsSignedOut';
import NavItemsLoggedIn from './NavItemsLoggedIn';

function SideNav({ currentUser }) {
  return (
    <nav id="side-nav" className="navbar-menu my-5">
      <div className="menu-list">
        {currentUser.id ? <NavItemsLoggedIn /> : <NavItemsSignedOut /> }
      </div>
    </nav>
  );
}

SideNav.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(SideNav);
