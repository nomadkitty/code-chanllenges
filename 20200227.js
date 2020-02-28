function greetPeople(names) {
	return names.map(name => `Hello ${name}`).join(", ")
}

// Fix this incorrect code, so that all tests pass!
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '')
}

function hurdleJump(hurdles, jumpHeight) {
	return jumpHeight >= Math.max(...hurdles)
}
