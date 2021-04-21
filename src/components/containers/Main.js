import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './Home';
import LandingPage from './LandingPage';

function Main({ authStatus }) {
  const content = authStatus ? <Home /> : <LandingPage />;

  return content;
}

Main.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps)(Main);
