const saveDevPointToLocaStorage = state => {
  try {
    const devPoint = JSON.stringify(state);
    localStorage.setItem('devPoint', devPoint);
  } catch (e) {
    console.log(e);
  }
};

const loadDevPointFromLocalStorage = () => {
  try {
    const storedDevPoint = localStorage.getItem('devPoint');
    const storedVal = storedDevPoint ? JSON.parse(storedDevPoint) : undefined;
    return storedVal;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export { saveDevPointToLocaStorage, loadDevPointFromLocalStorage };
