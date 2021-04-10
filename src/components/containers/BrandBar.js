import { Link } from 'react-router-dom';

function BrandBar() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand mx-7 px-4 is-text-centered">
        <Link className="" to="/">
          <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="dev-lookup-logo" width="60" height="60" />
        </Link>
      </div>
    </nav>
  );
}

export default BrandBar;
