const validateSession = async () => {
  try {
    return await fetch('http://localhost:3000/sessions/validate', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e.message;
  }
};

export default validateSession;
