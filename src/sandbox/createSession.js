const createSession = async userInfo => {
  const user = {
    user: {
      ...userInfo,
    },
  };

  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/sign_in`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default createSession;
