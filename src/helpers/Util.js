import dayjs from 'dayjs';


export function getMonthFromString(month, zeroIndex = false) {
  if (isNaN(parseInt(month))) {
    return (new Date(Date.parse(`${month} 1, 2019`)).getMonth()) + zeroIndex ? 0 : 1;
  }
  else {
    return (parseInt(month)) - (zeroIndex ? 1 : 0);
  }
}

export function getStringFromMonth(str, format = 'MMM') {
  return dayjs(`${parseInt(str)} 3, 2019`)
  .format(format);
}

export function capitalizeWord(word) {
  return word.replace(/\w\S*/g, txt => txt.charAt(0)
                                          .toUpperCase() + txt.substr(1)
                                                              .toLowerCase());
}

export function capitalizeName(name) {
  return name.split(' ')
             .map(part => part.replace(/\w\S*/g, txt => txt.charAt(0)
                                                           .toUpperCase() + txt.substr(1)
                                                                               .toLowerCase()))
             .join(' ');
}

export function getAcronym(name) {
  return name.split(' ')
             .map(part => part.replace(/\w\S*/g, txt => txt.charAt(0)
                                                           .toUpperCase()))
             .join('');
}

export function convertTimestampToDate(timestamp, format = 'MMM D, YYYY', inMs = true) {
  if (typeof timestamp === 'string') timestamp = parseInt(timestamp);
  else return new Error('Invalid type given to convertTimestampToDate()');

  return dayjs.unix(inMs ? (timestamp / 1000) : timestamp)
              .format(format);
}

export function randomIntFromRange(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}