import { Link } from 'react-router-dom';

const SignUpSuccess = () => (
  <div className="notification is-primary is-light">
    <p>
      You signed up successfully! Please head over to the
      <Link className="px-2 has-text-weight-bold has-text-success" to="/login">
        login page
      </Link>
      to sign in to your account
    </p>
  </div>
);

export default SignUpSuccess;
