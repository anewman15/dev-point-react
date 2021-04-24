const getDevs = async () => {
  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/developers', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getDevs;
