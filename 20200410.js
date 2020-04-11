function arrayOfMultiples (num, length) {
	const newArr = []
	for(let i=1; i<=length; i++){
		newArr.push(num*i)
	}
	return newArr
}