/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavItemUsername({ currentUser }) {
  return (
    <div className="navbar-item">
      <Link className="button is-size-6 is-success has-text-weight-bold is-fullwidth" to="/">
        {`Welcome, ${currentUser.username}`}
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
