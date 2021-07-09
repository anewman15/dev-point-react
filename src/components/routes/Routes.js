/* eslint-disable import/no-cycle */
import { Switch, Route } from 'react-router-dom';
import LogInForm from '../containers/LogInForm';
import SignUpForm from '../containers/SignUpForm';
import Home from '../containers/Home';
import Main from '../containers/Main';
import LandingPage from '../containers/LandingPage';
import DevelopersList from '../containers/DevelopersList';
import DeveloperPage from '../containers/DeveloperPage';
import BookAppointment from '../containers/BookAppointment';
import AppoinmentsPage from '../containers/AppoinmentsPage';
import NotFound from '../presentational/NotFound';
import EditProfile from '../containers/EditProfile';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/land" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/edit_profile" component={EditProfile} />
      <Route exact path="/login" component={LogInForm} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <Route exact path="/developers" component={DevelopersList} />
      <Route exact path="/developers/:id" component={DeveloperPage} />
      <Route exact path="/book_appointment" component={BookAppointment} />
      <Route exact path="/appointments" component={AppoinmentsPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
