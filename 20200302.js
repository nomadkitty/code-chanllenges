function reverse(str) {
	return str.split("").reverse().join("")
}

function countdown(start) {
	return Array.from({length: start +1}, (v,i)=>i).reverse()
}
