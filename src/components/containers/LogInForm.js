/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import createSession from '../../sandbox/createSession';
import { saveAuthStatus } from '../../redux/actions/user';

const LogInForm = ({ authStatus, saveAuthStatus }) => {
  const userInfoInit = {
    email: '', password: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
  const [isInvalidCreds, setIsInvalidCreds] = useState(false);

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createSession(userInfo)
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(true);
          saveAuthStatus({ status: true });
            <Redirect to="/" />;
        } else if (response.status !== 200) {
          setIsInvalidCreds(true);
          saveAuthStatus({ status: false });
        } else {
          console.log(response);
        }
      });
    setUserInfo(userInfoInit);
  };

  const form = (
    <div>
      <form onSubmit={handleSubmit}>
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
                placeholder="e.g. example@example.com"
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
                placeholder="password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </label>
        </div>
        <div className="control">
          <button type="submit" className="button is-link">Log in</button>
        </div>
      </form>
    </div>
  );

  const content = isLoggedIn ? <Redirect to="/" /> : form;
  return content;
};

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { saveAuthStatus })(LogInForm);
