import { Link } from 'react-router-dom';

function NavItemDevelopers() {
  return (
    <div className="navbar-item">
      <Link className="text-primary-800 font-bold" to="/developers">Developers</Link>
    </div>
  );
}

export default NavItemDevelopers;
