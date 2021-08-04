import React from 'react';

const Loading = () => (
  <div>
    <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="loading" />
  </div>
);

export default Loading;
