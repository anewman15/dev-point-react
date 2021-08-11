/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ currentUser }) => {
  const { username, first_name, profile_image_url } = currentUser;
  return (
    <div className="my-3 p-3">
      <div className="my-6 py-4 is-flex is-justify-content-space-around is-align-items-center is-align-content-center">
        <div className="image edit-profile-image-wrapper mx-3">
          <img className="is-rounded" src={profile_image_url || `${process.env.PUBLIC_URL}/dev.png`} alt="profile_image" />
        </div>
        <p className="px-2 is-size-1 has-text-centered has-text-weight-bold mx-3">
          Welcome
          {first_name ? ` ${first_name} !` : ` ${username} !`}
        </p>
      </div>
      <div className="my-3 px-3">
        <p className="has-text-centered py-3">
          To add a profile image and other details, please visit the Edit Profile page
        </p>
        <div className="is-flex is-justify-content-center is-align-items-center">
          <Link to="/edit_profile" className="button is-success my-5">Edit Profile</Link>
        </div>
        <div className="py-3 is-flex is-justify-content-center is-align-items-center">
          <p className="has-text-centered">
            To get into business, navigate to our
            <Link className="px-2 has-text-primary has-text-weight-bold" to="/developers">Developers </Link>
            page and get in touch with them
          </p>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Home);
