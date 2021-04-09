const createSession = async userInfo => {
  const user = {
    user: {
      ...userInfo,
    },
  };

  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/users/sign_in', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
    });
  } catch (e) {
    return e.message;
  }
};

export default createSession;
