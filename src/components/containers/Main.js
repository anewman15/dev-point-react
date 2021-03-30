import React, { useState, useEffect } from 'react';
import validateSession from '../../sandbox/validateSession';
import TopNav from './TopNav';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    validateSession({ setIsLoggedIn });
  }, []);

  console.log(isLoggedIn);

  return (
    <div>
      <TopNav isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Main;
