// compound interest with rounded to 2nd decimal
function compoundInterest(p, t, r, n) {
	return Math.round((p * Math.pow((1+r/n), n*t))*100)/100
}