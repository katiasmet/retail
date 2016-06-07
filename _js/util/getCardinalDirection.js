const getCardinalDirection = (startLat, endLat) => {
  if(startLat < endLat) {
    return 'north';
  } else {
    return 'south';
  }
};

export default getCardinalDirection;
