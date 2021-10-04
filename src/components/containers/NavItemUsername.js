/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavItemUsername({ currentUser }) {
  return (
    <div className="navbar-item">
      <Link className="text-white" to="/">
        {currentUser.username}
      </Link>
    </div>
  );
}

NavItemUsername.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(NavItemUsername);
