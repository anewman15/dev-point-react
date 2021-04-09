const validateSession = async () => {
  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/sessions/validate', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e.message;
  }
};

export default validateSession;
