import { Link } from 'react-router-dom';

function NavItemAppointments() {
  return (
    <div className="navbar-item">
      <Link className="button is-warning has-text-white has-text-weight-bold is-fullwidth" to="/appointments">Your Appointments</Link>
    </div>
  );
}

export default NavItemAppointments;
