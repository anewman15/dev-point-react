import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <div className="navbar-item">
      <Link to="/sign_up" className="button is-light"><strong>Sign up</strong></Link>
    </div>
  );
}

export default SignUpButton;
