const EditProfileNewslettersSection = () => (
  <div className="my-6">
    <h1 className="my-1 px-2 is-size-5 has-text-weight-bold">Newsletter Subscriptions</h1>
    <form className="">
      <div className="my-3 is-flex is-justify-content-start is-align-items-center">
        <div className="mx-2">
          <h1 className="title is-6">Monday Morning Newsletter</h1>
        </div>
        <div className="mx-3 is-flex is-justify-content-start is-align-items-center">
          <div className="mx-2">Unsubscribed</div>
          <button type="submit" className="button is-primary is-small">Subscribe</button>
        </div>
        <div className="mx-3 is-flex is-justify-content-start is-align-items-center">
          <div className="mx-2">Subscribed</div>
          <button type="submit" className="button is-primary is-small">Unsubscribe</button>
        </div>
      </div>
    </form>
  </div>
);

export default EditProfileNewslettersSection;
