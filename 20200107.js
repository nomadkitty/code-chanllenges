function isBetween(first, last, word) {
	let arr = [first, last, word]
	return arr.sort()[1] === word ? true : false;
}

function isBetween(first, last, word) {
	return [...arguments].sort()[1] === word;
}