const getDev = async ({ setDeveloper, id }) => {
  const response = await fetch(`http://localhost:3000/developers/${id}`);
  const data = await response.json();
  setDeveloper(data.user);
};

export default getDev;
