/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavItemsSignedOut from '../presentational/NavItemsSignedOut';
import NavItemsLoggedIn from './NavItemsLoggedIn';

function SideNav({ currentUser }) {
  return (
    <nav className="sticky mx-auto w-full z-10 top-0">
      <div className="px-2 md:px-12 flex justify-between items-center bg-yellow-400">
        <div className="mx-2">
          <Link className="" to="/">
            <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="dev-lookup-logo" width="60" height="60" />
          </Link>
        </div>
        <div className="flex space-x-2 items-center">
          {currentUser.id ? <NavItemsLoggedIn /> : <NavItemsSignedOut /> }
        </div>
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
