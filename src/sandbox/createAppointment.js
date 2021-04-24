const createAppointment = async appointmentInfo => {
  try {
    return await fetch('https://anewman15-dev-point.herokuapp.com/appointments', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentInfo),
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default createAppointment;
