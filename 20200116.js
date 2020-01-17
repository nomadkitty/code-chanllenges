function negate(arr) {
	return arr === [] ? []:arr.map(ele => -ele)
}

function firstLast(arr) {
	let newArr = []
	newArr.push(arr[0], arr[arr.length -1]);
	return newArr
}