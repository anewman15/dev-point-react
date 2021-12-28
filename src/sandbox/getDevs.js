const getDevs = async () => {
  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/developers`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getDevs;
