import { Link } from 'react-router-dom';

const Home = () => (
  <div className="my-6 p-3">
    <p className="my-3 px-2 is-size-1 has-text-centered has-text-weight-bold">Welcome!</p>
    <p className="my-3 px-2 is-size-3 has-text-centered">This will be the dashboard for your account</p>
    <div className="my-6 px-3">
      <p className="has-text-centered py-3">
        This page will soon allow you to add a
        profile picture, company info and an about me/us section
      </p>
      <div className="py-3 is-flex is-justify-content-center is-align-items-center">
        <p className="has-text-centered">
          For now though, navigate to our
          <Link className="px-2 has-text-primary has-text-weight-bold" to="/developers">Developers </Link>
          page and get in touch with them
        </p>
      </div>
    </div>
  </div>
);

export default Home;
