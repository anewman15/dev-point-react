/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { saveDevelopers } from '../../redux/actions/developer';
import getDevs from '../../sandbox/getDevs';
import DevelopersListItem from './DevelopersListItem';

function DevelopersList({ currentUser, developers, saveDevelopers }) {
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      getDevs()
        .then(response => response.json())
        .then(data => {
          if (data.developers) {
            saveDevelopers(data.developers);
          }
        });
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  const devs = developers.map(dev => (
    <div key={dev.user.id + 1000}>
      <DevelopersListItem dev={dev} />
    </div>
  ));

  return (
    <div className="my-3">
      <div className="m-6 pt-8">
        <h1 className="page-title">
          Our Developers
        </h1>
      </div>
      <div className="mx-3 px-4">
        {devs}
      </div>
    </div>
  );
}

DevelopersList.propTypes = {
  currentUser: PropTypes.object,
  developers: PropTypes.array,
}.isRequired;

const mapStateToProps = state => (
  {
    currentUser: state.currentUser,
    developers: state.developers,
  }
);

export default connect(mapStateToProps, { saveDevelopers })(DevelopersList);
