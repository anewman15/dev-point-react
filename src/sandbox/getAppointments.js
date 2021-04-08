const getAppointments = async () => {
  try {
    return await fetch('http://localhost:3000/appointments', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default getAppointments;
