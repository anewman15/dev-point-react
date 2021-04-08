const createAppointment = async appointmentInfo => {
  try {
    return await fetch('http://localhost:3000/appointments', {
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
