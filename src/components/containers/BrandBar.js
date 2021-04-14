/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';

function BrandBar() {
  const handleClick = () => {
    const sideNav = document.getElementById('side-nav');
    sideNav.classList.toggle('is-active');
  };

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand mx-3 my-3 px-2 is-text-centered">
        <Link className="" to="/">
          <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="dev-lookup-logo" width="60" height="60" />
        </Link>

        <a
          href="#side-nav"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="side-nav"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}

export default BrandBar;
