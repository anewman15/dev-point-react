/* eslint-disable import/no-cycle */
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import LogInForm from '../containers/LogInForm';
import SignUpForm from '../containers/SignUpForm';
import Home from '../containers/Home';
import Main from '../containers/Main';
import DevelopersList from '../containers/DevelopersList';
import DeveloperPage from '../containers/DeveloperPage';
import BookAppointment from '../containers/BookAppointment';
import AppoinmentsPage from '../containers/AppoinmentsPage';
import NotFound from '../presentational/NotFound';
import EditProfile from '../containers/EditProfile';
import AuthenticatedRoute from './AuthenticatedRoute';
import AuthenticationRoute from './AuthenticationRoute';

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path="/" component={Main} />
    <AuthenticatedRoute exact path="/home" currentUser={currentUser} component={Home} />
    <AuthenticatedRoute exact path="/edit_profile" currentUser={currentUser} component={EditProfile} />
    <AuthenticationRoute exact path="/login" currentUser={currentUser} component={LogInForm} />
    <AuthenticationRoute exact path="/sign_up" currentUser={currentUser} component={SignUpForm} />
    <AuthenticatedRoute exact path="/developers" currentUser={currentUser} component={DevelopersList} />
    <AuthenticatedRoute exact path="/developers/:id" currentUser={currentUser} component={DeveloperPage} />
    <AuthenticatedRoute exact path="/book_appointment" currentUser={currentUser} component={BookAppointment} />
    <AuthenticatedRoute exact path="/appointments" currentUser={currentUser} component={AppoinmentsPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

Routes.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Routes);
