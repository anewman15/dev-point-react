/* eslint-disable react/self-closing-comp */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import NavItemsSignedOut from '../presentational/NavItemsSignedOut';
import NavItemsLoggedIn from './NavItemsLoggedIn';

function SideNav({ authStatus }) {
  return (
    <aside className="menu my-7">
      <div className="menu-list">
        {authStatus ? <NavItemsLoggedIn /> : <NavItemsSignedOut /> }
      </div>
    </aside>
  );
}

SideNav.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps)(SideNav);
