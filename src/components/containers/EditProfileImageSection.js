/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import uploadProfileImage from '../../sandbox/uploadProfileImage';
import fileHash from '../../utils/fileHash';
import getPresignedUrl from '../../sandbox/getPresignedUrl';
import storeToS3Bucket from '../../sandbox/storeToS3Bucket';
import updateProfileImage from '../../sandbox/updateProfileImage';

const EditProfileImageSection = ({ currentUser }) => {
  const [imageFile, setImageFile] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const userInfo = {
    user_id: currentUser.id,
    fileBinary: imageFile,
  };

  const fileChangeHandler = event => setImageFile(event.target.files[0]);
  const handleProfileImageUpload = async e => {
    e.preventDefault();

    const md5Hash = await fileHash(imageFile);

    let presignedUrlParams = {};
    getPresignedUrl(userInfo.fileBinary, md5Hash)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        presignedUrlParams = data;
        storeToS3Bucket(presignedUrlParams, userInfo.fileBinary)
          .then(response => {
            if (response.status === 200) {
              updateProfileImage(userInfo, presignedUrlParams.blob_signed_id)
                .then(response => response.json())
                .then(data => {
                  if (data.status === 'success') {
                    setProfileImageUrl(data.profile_image_url);
                  }
                });
            }
          });
      });
  };

  const resetImageFile = () => setImageFile(null);

  return (
    <div className="my-6">
      <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Profile Image</h1>
      <div className="my-6 py-4 px-3">
        <div className="image edit-profile-image-wrapper">
          <img className="is-rounded" src={profileImageUrl || `${process.env.PUBLIC_URL}/dev.png`} alt="profile_image" />
        </div>
      </div>
      <form className="my-6 py-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center" onSubmit={handleProfileImageUpload}>
        <div className="file mx-2">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="profile_image"
              onChange={fileChangeHandler}
              required
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">
                Choose a file…
              </span>
            </span>
            {imageFile && <span className="mx-2 p-2 has-text-primary">{imageFile.name}</span>}
          </label>
        </div>
        <div className="my-2 py-2 is-flex is-justify-content-center is-align-items-center">
          <div className="control mx-2">
            <button type="submit" className="button is-primary px-6">Upload</button>
          </div>
          <div className="control mx-2">
            <button type="button" className="button is-danger px-6" onClick={resetImageFile}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

EditProfileImageSection.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(EditProfileImageSection);
