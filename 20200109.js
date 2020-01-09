function addEnding(arr, ending) {
	return arr.map(ele => ele.concat("", ending))
}