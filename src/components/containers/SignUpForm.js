/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import createUser from '../../sandbox/createUser';

const SignUpForm = ({ authStatus }) => {
  const userInfoInit = {
    email: '', username: '', password: '', password_confirmation: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
  const history = useHistory();

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser(userInfo)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          setUserInfo(userInfoInit);
          history.push('/login');
        } else {
          console.log(response);
        }
      });
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
                placeholder="valid email, e.g., example@example.com"
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor="username">
            Username
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                name="username"
                onChange={handleChange}
                value={userInfo.username}
                placeholder="minimum 5 characters"
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor="password">
            Password
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="password"
                name="password"
                onChange={handleChange}
                value={userInfo.password}
                placeholder="minimum 6 characters"
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor="password_confirmation">
            Confirm password
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="password"
                name="password_confirmation"
                onChange={handleChange}
                value={userInfo.password_confirmation}
                placeholder="exact same password again"
              />
            </div>
          </label>
        </div>
        <div className="control">
          <button type="submit" className="button is-link">Sign up</button>
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

export default connect(mapStateToProps)(SignUpForm);
