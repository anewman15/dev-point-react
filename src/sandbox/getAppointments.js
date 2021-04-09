const getAppointments = async () => {
  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/appointments', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getAppointments;
