/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import createSession from '../../sandbox/createSession';
import saveCurrentUser from '../../redux/actions/user';
import InvalidCredentials from './InvalidCredentials';

const LogInForm = ({ currentUser, saveCurrentUser }) => {
  const userInfoInit = {
    email: '', password: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [invalidCreds, setInvalidCreds] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createSession(userInfo)
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          saveCurrentUser(data.user);
          history.push('/');
        }
        if (data.error) {
          setInvalidCreds(true);
        }
      });
  };

  return (
    <div className="my-20 mx-auto">
      <div className="mx-auto w-8/12 md:w-6/12 lg:w-5/12 bg-yellow-300 rounded">
        <h1 className="px-2 pt-12 pb-2 mb-3 text-3xl text-center text-green-800 font-bold">Log In to Your Account</h1>
        <div className="px-6 pb-4">
          <hr className="border-1 border-primary-600 px-2" />
        </div>
        {invalidCreds && <InvalidCredentials />}
        <div className="flex justify-center items-center">
          <form className="px-4 mx-auto mb-8" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={userInfo.email}
                    placeholder="The one you signed up with"
                    required
                    autoFocus
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Password
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userInfo.password}
                    placeholder="Your password"
                    required
                  />
                  <span className="icon">
                    <i className="fas fa-unlock-alt"></i>
                  </span>
                </div>
              </label>
            </div>
            <div className="control">
              <button type="submit" className="btn btn-success my-3">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

LogInForm.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { saveCurrentUser })(LogInForm);
