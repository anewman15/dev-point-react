import { Link } from 'react-router-dom';

function NavItemAppointments() {
  return (
    <div className="navbar-item">
      <Link className="text-primary-800 font-bold" to="/appointments">Your Appointments</Link>
    </div>
  );
}

export default NavItemAppointments;
