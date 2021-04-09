const createUser = async userInfo => {
  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default createUser;
