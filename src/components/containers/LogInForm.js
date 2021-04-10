/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import createSession from '../../sandbox/createSession';
import { saveAuthStatus, saveUserDetails } from '../../redux/actions/user';

const LogInForm = ({ authStatus, saveAuthStatus, saveUserDetails }) => {
  const userInfoInit = {
    email: '', password: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
  const [isInvalidCreds, setIsInvalidCreds] = useState(false);
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
          setIsLoggedIn(true);
          saveAuthStatus({ status: true });
          saveUserDetails(data.user);
          history.push('/');
        }
      })
      .catch(error => {
        setIsLoggedIn(false);
        saveAuthStatus({ status: false });
      });
    setUserInfo(userInfoInit);
  };

  const form = (
    <div className="my-6 columns is-centered">
      <div className="column is-half has-background-warning border-warning">
        <h1 className="is-size-3 has-text-weight-bold is-text-centered p-2 my-3">Log In to Your Account</h1>
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
                  placeholder="the one you signed up with"
                  required
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
                  placeholder="your password"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
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

  const content = isLoggedIn ? <Redirect to="/" /> : form;
  return content;
};

LogInForm.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { saveAuthStatus, saveUserDetails })(LogInForm);
