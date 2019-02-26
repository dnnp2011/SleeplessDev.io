import dayjs from 'dayjs'

export function getMonthFromString(month, zeroIndex=false) {
	if (isNaN(parseInt(month))) {
		return (new Date(Date.parse(`${month} 1, 2019`)).getMonth()) + zeroIndex ? 0 : 1;
	}
	else {
		return (parseInt(month)) - (zeroIndex ? 1 : 0);
	}
}

export function getStringFromMonth(str, format="MMM") {
	return dayjs(`${parseInt(str)} 3, 2019`).format(format);
}

export function capitalizeWord(word) {
	return word.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function capitalizeName(name) {
	return name.split(' ').map(part => part.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())).join(' ');
}

export function getAcronym(name) {
	return name.split(' ').map(part => part.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase())).join('');
}

export function convertTimestampToDate(timestamp, format="MMM D, YYYY", inMs=true) {
	if (typeof timestamp === "string") timestamp = parseInt(timestamp);
	else return new Error("Invalid type given to convertTimestampToDate()");

	return dayjs.unix(inMs ? (timestamp / 1000) : timestamp).format(format);
}