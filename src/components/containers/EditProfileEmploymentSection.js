/* eslint-disable jsx-a11y/label-has-associated-control */

const EditProfileEmploymentSection = () => (
  <div className="my-6">
    <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Employment Info</h1>
    <form>
      <div className="is-flex is-justify-content-start is-align-items-flex-end">
        <div className="">
          <div className="control is-flex is-justify-content-center is-align-items-center my-2">
            <input className="input mx-2" type="text" placeholder="Job Title" required />
            <input className="input mx-2" type="text" placeholder="Employer" required />
          </div>
          <div className="control is-flex is-justify-content-center is-align-items-center my-2">
            <label htmlFor="start-date" className="mx-2">
              Start Date
              <input className="input" type="month" name="start-date" required />
            </label>
            <label htmlFor="end-date" className="mx-2">
              End Date
              <input className="input" type="month" name="end-date" required />
            </label>
          </div>
        </div>
        <div className="control my-2">
          <button type="submit" className="button is-primary">Save</button>
        </div>
      </div>
    </form>
  </div>
);

export default EditProfileEmploymentSection;
