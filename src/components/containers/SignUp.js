import { useState } from 'react';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState(userInfoInit);

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input type="text" name="email" onChange={handleChange} value={userInfo.email} placeholder="e.g. example@example.com" />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" name="username" onChange={handleChange} value={userInfo.username} placeholder="e.g. anewman15" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" name="password" onChange={handleChange} value={userInfo.password} placeholder="password" />
        </label>
        <label htmlFor="password_confirmation">
          Confirm Password
          <input type="text" name="password_confirmation" onChange={handleChange} value={userInfo.password_confirmation} placeholder="password again" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <div>
        <p>Or</p>
        <a href="/">Sign Up</a>
      </div>
    </div>
  );
};

export default SignUp;
