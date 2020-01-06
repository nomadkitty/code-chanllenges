function amplify(num) {
  return Array(num).fill(1)
    .map((v,i) => v + i)
    .map(v => v % 4 == 0 ? v * 10 : v)

}

function amplify2(num) {
    let arr = [];
    for (let i=1; i <= num; i++){
        arr.push(i)
    }
    return arr.map(item => item % 4 === 0 ? item*10 : item)
}

function Go(num) {
	let str = '-';
	return str.repeat(num)
}
