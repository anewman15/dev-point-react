/* eslint-disable jsx-a11y/label-has-associated-control */

const EditProfile = () => (
  <div className="my-1 p-3">
    <h1 className="my-1 px-2 is-size-1 has-text-centered has-text-weight-bold">Edit Profile</h1>
    <div className="my-2 px-3">
      <div className="image edit-profile-image-wrapper">
        <img className="is-rounded" src={`${process.env.PUBLIC_URL}/dev.png`} alt="profile_image" />
      </div>
      <form className="py-2 is-flex is-justify-content-center is-align-items-center">
        <div className="file mx-2">
          <label className="file-label">
            <input className="file-input" type="file" name="profile_image" />
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
      <div className="my-6">
        <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Name</h1>
        <form>
          <div className="is-flex is-justify-content-start is-align-items-center">
            <div className="control is-flex is-justify-content-center is-align-items-center">
              <input className="input mx-2" type="text" placeholder="FirstName" />
              <input className="input mx-2" type="text" placeholder="LastName" />
            </div>
            <div className="control">
              <button type="submit" className="button is-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
      <div className="my-6">
        <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Employment Info</h1>
        <form>
          <div className="is-flex is-justify-content-start is-align-items-flex-end">
            <div className="">
              <div className="control is-flex is-justify-content-center is-align-items-center my-2">
                <input className="input mx-2" type="text" placeholder="Job Title" />
                <input className="input mx-2" type="text" placeholder="Employer" />
              </div>
              <div className="control is-flex is-justify-content-center is-align-items-center my-2">
                <label htmlFor="start-date" className="mx-2">
                  Start Date
                  <input className="input" type="month" name="start-date" />
                </label>
                <label htmlFor="end-date" className="mx-2">
                  End Date
                  <input className="input" type="month" name="end-date" />
                </label>
              </div>
            </div>
            <div className="control my-2">
              <button type="submit" className="button is-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
      <div className="my-6">
        <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Social Links</h1>
        <form>
          <div className="is-flex is-justify-content-start is-align-items-flex-end">
            <div className="control is-flex is-justify-content-center is-align-items-center my-2">
              <label htmlFor="link-name" className="mx-2">
                Website Name
                <input className="input" type="text" name="link-name" placeholder="GitHub" />
              </label>
              <label htmlFor="link-url" className="mx-2">
                Url
                <input className="input" type="url" name="link-url" placeholder="user@github.com" />
              </label>
            </div>
            <div className="control my-2">
              <button type="submit" className="button is-primary">Add Link</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default EditProfile;
