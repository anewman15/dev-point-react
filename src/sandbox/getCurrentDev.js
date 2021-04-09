const getDev = async id => {
  try {
    return await fetch(`https://anewman15-dev-point.herokuapp.com/developers/${id}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getDev;
