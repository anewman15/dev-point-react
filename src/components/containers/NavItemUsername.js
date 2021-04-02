import { Link } from 'react-router-dom';

function NavItemUsername() {
  return (
    <div className="navbar-item">
      <Link className="has-text-dark" to="/home">Welcome, username</Link>
    </div>
  );
}

export default NavItemUsername;
