const createUser = async userInfo => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    const data = e.message;
    return data;
  }
};

export default createUser;
