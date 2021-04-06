const getDev = async id => {
  try {
    return await fetch(`http://localhost:3000/developers/${id}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getDev;
