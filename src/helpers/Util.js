import dayjs from 'dayjs'

export default class Util {
	static getMonthFromString(month, zeroIndex=false) {
		if (isNaN(parseInt(month))) {
			return (new Date(Date.parse(`${month} 1, 2019`)).getMonth()) + zeroIndex ? 0 : 1;
		}
		else {
			return (parseInt(month)) - (zeroIndex ? 1 : 0);
		}
	}

	static getStringFromMonth(str) {
		return dayjs(`${parseInt(str)} 3, 2019`).format("MMM");
	}
}