import { useEffect, useState } from 'react';
import endSession from '../../sandbox/endSession';
import getDevs from '../../sandbox/getDevs';

function SignOutButton() {
  const [developers, setDevelopers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    endSession();
  };

  useEffect(() => {
    let getDevelopers = true;
    if (getDevelopers) {
      getDevs({ setDevelopers });
    }
    return () => {
      getDevelopers = false;
    };
  }, []);

  console.log(developers);

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="button is-primary">Sign Out</button>
    </form>
  );
}

export default SignOutButton;
