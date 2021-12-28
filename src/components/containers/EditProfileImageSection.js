/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import saveCurrentUser from '../../redux/actions/user';
import fileHash from '../../utils/fileHash';
import getPresignedUrl from '../../sandbox/getPresignedUrl';
import storeToCloudinary from '../../sandbox/storeToCloudinary';
import updateProfileImage from '../../sandbox/updateProfileImage';

const EditProfileImageSection = ({ currentUser, saveCurrentUser }) => {
  const [imageFile, setImageFile] = useState(null);
  const imageFileInput = useRef();
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const userInfo = {
    user_id: currentUser.id,
    fileBinary: imageFile,
  };

  const updatedCurrentUser = currentUser;

  const fileChangeHandler = event => setImageFile(event.target.files[0]);

  const resetImageForm = () => {
    imageFileInput.current.value = '';
    setImageFile(null);
  };

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
        storeToCloudinary(presignedUrlParams, userInfo.fileBinary)
          .then(response => {
            if (response.status === 200) {
              updateProfileImage(userInfo, presignedUrlParams.blob_signed_id)
                .then(response => response.json())
                .then(data => {
                  if (data.status === 'success') {
                    setProfileImageUrl(data.profile_image_url);
                    updatedCurrentUser.profile_image_url = data.profile_image_url;
                    saveCurrentUser(updatedCurrentUser);
                    resetImageForm();
                  }
                });
            }
          });
      });
  };

  return (
    <div className="my-8 mx-auto p-8">
      <h1 className="my-2 px-2 text-2xl text-primary-800 font-bold">Profile Image</h1>
      <div className="my-6 w-11/12 flex flex-col justify-center items-center p-8">
        <div className="mx-auto">
          <img
            className="rounded-full"
            src={profileImageUrl || currentUser.profile_image_url || `${process.env.PUBLIC_URL}/dev.png`}
            alt="profile_image"
            width="256"
          />
        </div>
        <form
          className="my-6 py-4"
          onSubmit={handleProfileImageUpload}
        >
          <div className="flex flex-wrap justify-center items-center space-x-6">
            <div className="file mx-2">
              <label className="file-label">
                <input
                  ref={imageFileInput}
                  className="file-input"
                  type="file"
                  name="profile_image"
                  onChange={fileChangeHandler}
                  required
                />
                <div className="flex flex-wrap justify-center items-center space-x-4">
                  <p className="btn btn-secondary">
                    <span className="flex flex-wrap justify-center items-center space-x-4">
                      <i className="file-icon fas fa-upload" />
                      <span>Choose a file…</span>
                    </span>
                  </p>
                  {imageFile && <span className="mx-2 p-2 text-primary-600">{imageFile.name}</span>}
                </div>
              </label>
            </div>
            <div className="my-2 py-2 flex flex-wrap justify-center items-center space-x-4">
              <div className="control">
                <button type="submit" className="btn btn-primary">Upload</button>
              </div>
              <div className="control">
                <button type="button" className="btn btn-warning" onClick={resetImageForm}>Clear</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

EditProfileImageSection.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { saveCurrentUser })(EditProfileImageSection);
