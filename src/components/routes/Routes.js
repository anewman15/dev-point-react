/* eslint-disable import/no-cycle */
import { Switch, Route } from 'react-router-dom';
import Main from '../containers/Main';
import LogInForm from '../containers/LogInForm';
import SignUpForm from '../containers/SignUpForm';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={LogInForm} />
      <Route exact path="/sign_up" component={SignUpForm} />
    </Switch>
  );
}

export default Routes;
