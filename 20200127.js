function hasKey(obj, key) {
	return obj.hasOwnProperty(key)
}

function multiplyByLength(arr) {
	return arr.map(ele => ele*arr.length)
}