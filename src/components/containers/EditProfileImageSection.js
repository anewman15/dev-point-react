/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

const EditProfileImageSection = () => {
  const [imageFile, setImageFile] = useState(null);
  const fileChangeHandler = event => setImageFile(event.target.files[0]);
  const uploadProfileImage = e => {
    e.preventDefault();
    console.log(`Image: ${imageFile.type}`);
  };

  const resetImageFile = () => setImageFile(null);

  return (
    <div className="my-6">
      <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Profile Image</h1>
      <div className="my-2 px-3">
        <div className="image edit-profile-image-wrapper">
          <img className="is-rounded" src={`${process.env.PUBLIC_URL}/dev.png`} alt="profile_image" />
        </div>
      </div>
      <form className="py-2 is-flex is-flex-direction-column is-justify-content-center is-align-items-center" onSubmit={uploadProfileImage}>
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
            <button type="submit" className="button is-primary px-6">Save</button>
          </div>
          <div className="control mx-2">
            <button type="button" className="button is-danger px-6" onClick={resetImageFile}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfileImageSection;
