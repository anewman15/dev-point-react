const endSession = async () => {
  try {
    return await fetch('http://localhost:3000/users/sign_out', {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default endSession;
