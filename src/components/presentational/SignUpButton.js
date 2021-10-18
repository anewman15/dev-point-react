import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <div className="navbar-item">
      <Link to="/sign_up" className="btn btn-secondary"><strong>Sign up</strong></Link>
    </div>
  );
}

export default SignUpButton;
