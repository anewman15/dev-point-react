const endSession = async () => {
  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/users/sign_out', {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default endSession;
