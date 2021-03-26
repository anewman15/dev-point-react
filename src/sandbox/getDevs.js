const getDevs = async ({ setDevelopers }) => {
  const response = await fetch('http://localhost:3000/developers');
  const data = await response.json();
  setDevelopers(data.developers);
};

export default getDevs;
