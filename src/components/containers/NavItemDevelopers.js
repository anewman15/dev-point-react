import { Link } from 'react-router-dom';

function NavItemDevelopers() {
  return (
    <div className="navbar-item">
      <Link className="button is-warning is-fullwidth has-text-white has-text-weight-bold" to="/developers">Developers</Link>
    </div>
  );
}

export default NavItemDevelopers;
