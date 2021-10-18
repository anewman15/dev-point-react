import { Link } from 'react-router-dom';

function LogInButton() {
  return (
    <div className="navbar-item">
      <Link to="/login" className="btn btn-success">Log in</Link>
    </div>
  );
}

export default LogInButton;
