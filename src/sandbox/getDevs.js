const getDevs = async ({ setDevelopers }) => {
  const response = await fetch('http://localhost:3000/developers', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  });
  const data = await response.json();
  setDevelopers(data.developers);
};

export default getDevs;
