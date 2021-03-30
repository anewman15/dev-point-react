import { useState } from 'react';
import createUser from '../../sandbox/createUser';

const SignUpForm = () => {
  const userInfoInit = {
    email: '', username: '', password: '', password_confirmation: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser(userInfo);
    setUserInfo(userInfoInit);
  };

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
                placeholder="e.g. anewman15"
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
                placeholder="Password"
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
                placeholder="Password again"
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
};

export default SignUpForm;
