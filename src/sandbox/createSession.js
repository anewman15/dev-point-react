const createSession = async (userInfo, setAuthToken) => {
  const user = {
    user: {
      ...userInfo,
    },
  };

  try {
    const reponse = await fetch('http://localhost:3000/users/sign_in', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
    });
    const data = await reponse.json();
    setAuthToken(data);
  } catch (e) {
    console.log(e.message);
  }
};

export default createSession;
