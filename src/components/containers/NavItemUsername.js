/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavItemUsername({ userDetails }) {
  return (
    <div className="navbar-item">
      <Link className="has-text-dark" to="/">
        {`Welcome, ${userDetails.username}`}
      </Link>
    </div>
  );
}

NavItemUsername.propTypes = {
  userDetails: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  userDetails: state.userDetails,
});

export default connect(mapStateToProps)(NavItemUsername);
