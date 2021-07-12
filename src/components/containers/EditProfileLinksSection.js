/* eslint-disable jsx-a11y/label-has-associated-control */

const EditProfileLinksSection = () => (
  <div className="my-6">
    <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Social Links</h1>
    <form>
      <div className="is-flex is-justify-content-start is-align-items-flex-end">
        <div className="control is-flex is-justify-content-center is-align-items-center my-2">
          <label htmlFor="link-name" className="mx-2">
            Website Name
            <input className="input" type="text" name="link-name" placeholder="GitHub" required />
          </label>
          <label htmlFor="link-url" className="mx-2">
            Url
            <input className="input" type="url" name="link-url" placeholder="user@github.com" required />
          </label>
        </div>
        <div className="control my-2">
          <button type="submit" className="button is-primary">Add Link</button>
        </div>
      </div>
    </form>
  </div>
);

export default EditProfileLinksSection;
