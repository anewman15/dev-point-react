/* eslint-disable jsx-a11y/label-has-associated-control */

const EditProfileImageSection = () => (
  <div className="my-6">
    <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Profile Image</h1>
    <div className="my-2 px-3">
      <div className="image edit-profile-image-wrapper">
        <img className="is-rounded" src={`${process.env.PUBLIC_URL}/dev.png`} alt="profile_image" />
      </div>
    </div>
    <form className="py-2 is-flex is-justify-content-center is-align-items-center">
      <div className="file mx-2">
        <label className="file-label">
          <input className="file-input" type="file" name="profile_image" required />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">
              Choose a file…
            </span>
          </span>
        </label>
      </div>
      <div className="control mx-2">
        <button type="submit" className="button is-primary">Save</button>
      </div>
      <div className="control mx-2">
        <button type="submit" className="button is-danger">Cancel</button>
      </div>
    </form>
  </div>
);

export default EditProfileImageSection;