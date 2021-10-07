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
    <div className="my-12 mx-auto">
      <div className="mx-auto w-8/12 md:w-6/12 lg:w-5/12 bg-yellow-400 rounded">
        <h1 className="px-2 pt-8 pb-2 mb-3 text-3xl text-center text-green-800 font-bold">Create an Account</h1>
        <div className="px-6 pb-2">
          <hr className="border-1 border-primary-600 px-2" />
        </div>
        {Object.keys(formErrors).length >= 1 && <FormErrorsSection formErrors={formErrors} />}
        {formSuccess && <SignUpSuccess />}
        <div className="flex justify-center items-center">
          <form className="px-4 mx-auto mb-8" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={userInfo.email}
                    placeholder="email@emails.com"
                    required
                    autoFocus
                  />
                  <span className="icon">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor="username">
                Username
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={userInfo.username}
                    placeholder="Minimum 5 characters"
                    required
                  />
                  <span className="icon">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userInfo.password}
                    placeholder="Minimum 6 characters"
                    required
                  />
                  <span className="icon">
                    <i className="fas fa-lock" />
                  </span>
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor="password_confirmation">
                Confirm password
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password_confirmation"
                    onChange={handleChange}
                    value={userInfo.password_confirmation}
                    placeholder="Your password again"
                    required
                  />
                  <span className="icon">
                    <i className="fas fa-lock" />
                  </span>
                </div>
              </label>
            </div>
            <div className="control">
              <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
