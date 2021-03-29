const endSession = async () => {
  try {
    const reponse = await fetch('http://localhost:3000/users/sign_out', {
      method: 'DELETE',
      credentials: 'include',
    });
    const data = await reponse.json();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};

export default endSession;
