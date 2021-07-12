/* eslint-disable jsx-a11y/label-has-associated-control */

const EditProfileContactSection = () => (
  <div className="my-6">
    <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Contact Info</h1>
    <form>
      <div className="is-flex is-justify-content-start is-align-items-flex-end my-3">
        <label htmlFor="link-url" className="mx-2">
          Video Call Link
          <input className="input" type="url" name="link-url" placeholder="https://zoom.us/j/randomzoomidwithsomerandomcharsandnums" required />
        </label>
        <div className="control">
          <button type="submit" className="button is-primary">Add</button>
        </div>
      </div>
    </form>
    <form>
      <div className="is-flex is-justify-content-start is-align-items-flex-end my-3">
        <label htmlFor="phone-number" className="mx-2">
          Phone Number
          <input className="input" type="url" name="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-345-5678" required />
        </label>
        <div className="control">
          <button type="submit" className="button is-primary">Add</button>
        </div>
      </div>
    </form>
  </div>
);

export default EditProfileContactSection;
