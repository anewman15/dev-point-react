const getDev = async id => {
  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/developers/${id}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getDev;
