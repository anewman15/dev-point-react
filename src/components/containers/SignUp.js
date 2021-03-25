const SignUp = () => {
  const hi = 'Hi';
  return (
    <div>
      <h1>{`${hi}`}</h1>
      <form>
        <label htmlFor="email">
          Email
          <input type="text" name="email" placeholder="e.g. example@example.com" />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" name="username" placeholder="e.g. anewman15" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" placeholder="password" />
        </label>
        <label htmlFor="password_confirmation">
          Confirm Password
          <input type="text" placeholder="password_confirmation" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignUp;
