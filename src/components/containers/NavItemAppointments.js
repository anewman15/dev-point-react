import { Link } from 'react-router-dom';

function NavItemAppointments() {
  return (
    <div className="navbar-item">
      <Link className="has-text-dark" to="/appointments">Your Appointments</Link>
    </div>
  );
}

export default NavItemAppointments;
