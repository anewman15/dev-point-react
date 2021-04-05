const getDevs = async () => {
  try {
    return await fetch('http://localhost:3000/developers', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getDevs;
