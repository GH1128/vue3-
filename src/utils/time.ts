export function formatTime(time) {
	let date = new Date(time).toJSON()
	return new Date(+ new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}

// 筛选条件 8小时时差 2021-11-30T16:00:00.000Z
export function returnTimeeight(time) {
	if (typeof time == 'object') {
		time = time.toISOString()
	}
	console.log();
	if (time) {
		let newDate = new Date(time).valueOf() + 8 * 3600 * 1000
		return new Date(newDate).toISOString()
	}
}

export function formatTime1(time) {
	return time.split('T')[0]
}

export function formatTime2(time) {
	return time.split('T')[1].split('.')[0]
}

export function formatTime3(time) {
	let date = new Date(time).toJSON()
	return new Date(+ new Date(date) + 8 * 3600 * 1000)
}

//时间转换
export function renderTime(date) {
	let time = '';
	if (date != '0001-01-01T00:00:00' && date) {
		let dateee = new Date(date).toJSON();
		time = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
	}
	if (date == '1970-01-01T00:00:00') {
		time = '';
	}
	return time;
}