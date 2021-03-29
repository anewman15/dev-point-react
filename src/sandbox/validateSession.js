const validateSession = async () => {
  try {
    const reponse = await fetch('http://localhost:3000/sessions/validate', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
    const data = await reponse.json();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};

export default validateSession;
