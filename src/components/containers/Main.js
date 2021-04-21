import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './Home';
import LandingPage from './LandingPage';

function Main({ currentUser }) {
  const content = currentUser.id ? <Home /> : <LandingPage />;

  return content;
}

Main.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Main);
