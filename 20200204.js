const straightDigital = number => {
	let arr = [...String(number)],
			step = arr.map((v,i) => arr[i+1] - v).filter(v => !isNaN(v)),
			len = new Set(step).size;
	return len === 1 && number > 99
		? arr[1] - arr[0] || "Trivial Straight" 
		: "Not Straight";
}