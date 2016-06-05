import {inRange} from 'lodash';

const getCardinalDirection = (startLat,startLong,endLat,endLong) => {
  startLat = radians(startLat);
  startLong = radians(startLong);
  endLat = radians(endLat);
  endLong = radians(endLong);

  let dLong = endLong - startLong;

  let dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
  if (Math.abs(dLong) > Math.PI){
    if (dLong > 0.0) {
      dLong = -(2.0 * Math.PI - dLong);
    }
    else {
      dLong = (2.0 * Math.PI + dLong);
    }
  }

  let angle = degrees( Math.atan2(dLong, dPhi) + 360.0) % 360.0;

  if( inRange(angle, 270, 360) || inRange(angle, 0, 90)) {
    console.log('noord');
    return 'noord';
  } else if (inRange(angle, 90, 270)) {
    console.log('zuid');
    return 'zuid';
  }
};

const radians = (n) => {
  return n * (Math.PI / 180);
};
const degrees = (n) => {
  return n * (180 / Math.PI);
};

export default getCardinalDirection;
