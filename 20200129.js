function profitMargin(costPrice, salesPrice) {
	return ((salesPrice-costPrice)/salesPrice*100).toFixed(1)+"%"
}

function findLargestNum(arr) {
	return Math.max(...arr)
}

function reverse(bool) {
	return typeof(bool) === "boolean" ? !bool:"boolean expected"
}

function existsHigher(arr, n) {
	return Math.max(...arr) >= n ? true:false
}

function diffMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr)
}

function reverseCapitalize(str) {
	return str.split("").reverse().join('').toUpperCase()
}

function isFourLetters(arr) {
	return arr.filter(ele => ele.length === 4)
}

function mysteryFunc(arr, num) {
  return arr.map(ele => ele%num)
}