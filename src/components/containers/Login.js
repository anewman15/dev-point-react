import { useState } from 'react';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: '', password: '',
  });

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="username">
          Username
          <input type="text" name="username" onChange={handleChange} placeholder="e.g. anewman15" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" name="password" onChange={handleChange} placeholder="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <p>Or</p>
      <a href="/">Sign Up</a>
    </div>
  );
};

export default Login;
