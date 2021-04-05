/* eslint-disable no-unused-vars */
import { checkPropTypes } from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import saveDevelopers from '../../redux/actions/developer';

import getDevs from '../../sandbox/getDevs';

function DevelopersList({ authStatus, developers, saveDevelopers }) {
  useEffect(() => {
    getDevs()
      .then(response => response.json())
      .then(data => {
        saveDevelopers(data.developers);
      });
  }, []);

  const devs = developers.map(dev => <p key={dev.user.id.toString()}>{dev.user.username}</p>);

  return (
    <div>
      Hi from devs
      {devs}
    </div>
  );
}

DevelopersList.propTypes = {
  authStatus: checkPropTypes.bool,
  developers: checkPropTypes.array,
}.isRequired;

const mapStateToProps = state => (
  {
    authStatus: state.authStatus,
    developers: state.developers,
  }
);

export default connect(mapStateToProps, { saveDevelopers })(DevelopersList);
