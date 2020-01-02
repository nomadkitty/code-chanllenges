function isSymmetrical(num) {
	let revNum = parseFloat(num.toString().split('').reverse().join(''))
	return num === revNum ? true : false;
}