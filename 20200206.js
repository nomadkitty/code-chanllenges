function howManyTimes(num) {
	let str = "a";
	return `Ed${str.repeat(num)}bit`
}

function noOdds(arr) {
	return arr.filter(ele=> ele%2 ===0)
}

function removeNull(arr) {
	return arr.filter(ele => ele !== null)
}
