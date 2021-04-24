import { Link } from 'react-router-dom';

function LogInButton() {
  return (
    <div className="navbar-item">
      <Link to="/login" className="button is-primary is-fullwidth">Log in</Link>
    </div>
  );
}

export default LogInButton;
