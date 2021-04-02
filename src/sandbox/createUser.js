const createUser = async userInfo => {
  try {
    return await fetch('http://localhost:3000/users', {
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
