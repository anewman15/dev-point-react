const createAppointment = async appointmentInfo => {
  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/appointments`, {
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
