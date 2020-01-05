function squarePatch(n) {
	let arr = []
	if (n===0){
		return arr
	} else {
		return  Array(n).fill(Array(n).fill(n))
	}
}