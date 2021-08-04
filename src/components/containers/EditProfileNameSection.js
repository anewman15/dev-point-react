/* eslint-disable jsx-a11y/label-has-associated-control */

const EditProfileNameSection = () => (
  <div className="my-6">
    <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Name</h1>
    <form>
      <div className="is-flex is-justify-content-start is-align-items-center">
        <div className="control is-flex is-justify-content-center is-align-items-center">
          <input className="input mx-2" type="text" placeholder="FirstName" required />
          <input className="input mx-2" type="text" placeholder="Other Names" required />
          <input className="input mx-2" type="text" placeholder="LastName" required />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">Save</button>
        </div>
      </div>
    </form>
  </div>
);

export default EditProfileNameSection;
