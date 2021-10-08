/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ currentUser }) => {
  const { username, first_name, profile_image_url } = currentUser;
  return (
    <div className="my-3 mx-auto px-2 md:px-8 h-screen filter drop-shadow-2xl">
      <div className="mx-auto md:w-11/12 lg:w-10/12 my-6 p-2 rounded border border-yellow-50 h-full bg-gray-50">
        <div className="p-4 flex justify-center space-x-8 items-center content-center">
          <div className="w-32 rounded-full">
            <img className="rounded-full" src={profile_image_url || `${process.env.PUBLIC_URL}/dev.png`} alt="profile_image" />
          </div>
          <p className="text-3xl text-primary-800 text-center font-bold">
            Welcome
            {first_name ? ` ${first_name} !` : ` ${username} !`}
          </p>
        </div>

        <hr className="mx-8 border-1 border-gray-200" />

        <div className="my-8 px-4 mx-auto w-8/12 text-gray-800">
          <p className="py-3 leading-loose">
            To add a profile image and other details, please visit the Edit Profile page
            <Link to="/edit_profile" className="btn btn-warning ml-4">Edit&nbsp;Profile</Link>
          </p>
          <p className="py-3">
            To get into business, navigate to our
            <Link className="px-2 link-primary" to="/developers">Developers </Link>
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
