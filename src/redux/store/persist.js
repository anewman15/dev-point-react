const saveDevPointToLocaStorage = state => {
  try {
    const devPoint = JSON.stringify(state);
    localStorage.setItem('devPoint', devPoint);
  } catch (e) {
    return e;
  }
};

const loadDevPointFromLocalStorage = () => {
  try {
    const storedDevPoint = localStorage.getItem('devPoint');
    const storedVal = storedDevPoint ? JSON.parse(storedDevPoint) : undefined;
    return storedVal;
  } catch (e) {
    return undefined;
  }
};

export { saveDevPointToLocaStorage, loadDevPointFromLocalStorage };
