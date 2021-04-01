/* eslint-disable import/no-cycle */
import { Switch, Route } from 'react-router-dom';
import LogInForm from '../containers/LogInForm';
import SignUpForm from '../containers/SignUpForm';
import Home from '../containers/Home';
import Main from '../containers/Main';
import LandingPage from '../containers/LandingPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/land" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={LogInForm} />
      <Route exact path="/sign_up" component={SignUpForm} />
    </Switch>
  );
}

export default Routes;
