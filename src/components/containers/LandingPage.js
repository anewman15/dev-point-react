import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="bg-code">
      <div className="columns is-centered">
        <div className="my-6 column is-four-fifths">
          <div className="p-6 bd-filter border-warning has-text-white">
            <p className="is-size-2 has-text-centered">
              Welcome to DevPoint
            </p>
            <p className="my-3 p-2 is-size-4 has-text-centered">
              Our experienced developers specialize in latest frameworks and technologies, and have
              a track record of successful project deliveries across multiple
              domains in the software industry
            </p>
            <p className="my-3 p-2 is-size-4 has-text-centered">
              Our platform allows you to meet our developers individually for a
              free online consultation and build rapport for future collaboration
            </p>
          </div>
          <div className="columns is-centered my-6 mx-5">
            <div className="column has-text-centered is-flex is-justify-content-center is-align-items-center">
              <Link to="/sign_up" className="button is-success is-large is-uppercase">Sign Up Now</Link>
            </div>
            <div className="column has-text-centered is-flex is-justify-content-center is-align-items-center">
              <p className="px-4 has-text-white has-text-weight-bold">or</p>
            </div>
            <div className="column has-text-centered is-flex is-justify-content-center is-align-items-center">
              <Link to="/login" className="button is-light is-small has-text-dark has-text-weight-bold">Log into your account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
