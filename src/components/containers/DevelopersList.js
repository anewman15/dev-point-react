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

  const devsList = (
    <div className="my-3">
      <div className="has-text-centered my-6">
        <p className="is-uppercase has-text-weight-bold is-size-2">
          Our Developers
        </p>
        <p className="is-size-6 my-2 has-text-weight-bold has-text-grey-light">
          Please click on one to view their profile
        </p>
      </div>
      <div className="mx-3 px-4">
        <Carousel
          centerMode
          centerSlidePercentage={70}
          infiniteLoop
          autoPlay
          interval={4000}
          showIndicators={false}
          showThumbs={false}
        >
          {devs}
        </Carousel>
      </div>
    </div>
  );

  const content = currentUser.id ? devsList : <Redirect to="/login" />;
  return content;
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
