const getAppointments = async () => {
  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/appointments`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getAppointments;
