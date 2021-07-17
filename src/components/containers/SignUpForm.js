/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import createUser from '../../sandbox/createUser';
import FormErrorsSection from './FormErrorsSection';
import SignUpSuccess from './SignUpSuccess';

const SignUpForm = () => {
  const userInfoInit = {
    email: '', username: '', password: '', password_confirmation: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

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
        let res;
        if (response.status === 200) {
          setUserInfo(userInfoInit);
          res = response.json();
        }
        if (response.status === 422) {
          res = response.json();
        }
        return res;
      })
      .then(data => {
        if (data.errors) {
          setFormErrors(data.errors);
          setFormSuccess(false);
        }
        if (data.message === 'User created successfully!') {
          setFormSuccess(true);
          setFormErrors({});
        }
      });
  };

  return (
    <div className="my-6 mx-2 columns is-centered">
      <div className="column is-half has-background-warning border-warning">
        <h1 className="is-size-3 has-text-weight-bold is-text-centered p-2 my-3">Create an Account</h1>
        {Object.keys(formErrors).length >= 1 && <FormErrorsSection formErrors={formErrors} />}
        {formSuccess && <SignUpSuccess />}
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
                  placeholder="email@emails.com"
                  required
                  autoFocus
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
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
                  placeholder="Minimum 5 characters"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
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
                  placeholder="Minimum 6 characters"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
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
                  placeholder="Your password again"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </label>
          </div>
          <div className="control">
            <button type="submit" className="button is-success my-5">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
