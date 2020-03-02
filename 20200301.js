function sameCase(str) {
	return (/[a-z]/.test(str) && /[A-Z]/.test(str) ? false : true)
}
