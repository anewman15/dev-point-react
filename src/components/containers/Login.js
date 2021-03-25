const Login = () => {
  const hi = 'Hi';
  return (
    <div>
      <h1>{`${hi}`}</h1>
      <form>
        <label htmlFor="username">
          Username
          <input type="text" name="username" placeholder="e.g. anewman15" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" placeholder="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <p>Or</p>
      <a href="/">Sign Up</a>
    </div>
  );
};

export default Login;
