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
    <div className="my-6 mx-2 columns is-centered">
      <div className="column is-half has-background-warning border-warning">
        <h1 className="is-size-3 has-text-weight-bold is-text-centered p-2 my-3">Log In to Your Account</h1>
        {invalidCreds && <InvalidCredentials />}
        <form className="p-4" onSubmit={handleSubmit}>
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
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={userInfo.password}
                  placeholder="Your password"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-unlock-alt"></i>
                </span>
              </div>
            </label>
          </div>
          <div className="control">
            <button type="submit" className="button is-success my-5">Log in</button>
          </div>
        </form>
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
