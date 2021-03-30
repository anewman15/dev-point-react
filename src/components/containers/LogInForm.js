/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import createSession from '../../sandbox/createSession';

const LogInForm = () => {
  const userInfoInit = {
    email: '', password: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [authToken, setAuthToken] = useState({});

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createSession(userInfo, setAuthToken);
    setUserInfo(userInfoInit);
  };

  console.log(authToken);

  return (
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
};

export default LogInForm;
