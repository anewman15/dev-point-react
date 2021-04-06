/* eslint-disable no-unused-vars */
import { checkPropTypes } from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import saveDevelopers from '../../redux/actions/developer';
import getDevs from '../../sandbox/getDevs';
import DevelopersListItem from './DevelopersListItem';

function DevelopersList({ authStatus, developers, saveDevelopers }) {
  useEffect(() => {
    getDevs()
      .then(response => response.json())
      .then(data => {
        saveDevelopers(data.developers);
      });
  }, []);

  const devs = developers.map(dev => (
    <div key={dev.user.id.toString()}>
      <DevelopersListItem dev={dev} />
    </div>
  ));

  return (
    <div className="">
      <div className="has-text-centered my-6">
        <p className="is-uppercase has-text-weight-bold is-size-2">
          Our Developers
        </p>
        <p className="is-size-6 my-2 has-text-weight-bold has-text-grey-light">
          Please click on one to view their profile
        </p>
      </div>
      <div className="columns is-centered">
        <div className="column is-four-fifths">
          <Carousel centerMode centerSlidePercentage={60} infiniteLoop showIndicators={false}>
            {devs}
          </Carousel>
        </div>
      </div>
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
