const endSession = async () => {
  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/sign_out`, {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default endSession;
