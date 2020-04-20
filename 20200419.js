// Black Jack game
function count(deck) {
	return deck.reduce((acc, curr) => acc + (curr<=6 ? 1: curr<=9? 0 : -1), 0)
}

function AlphabetSoup(str) {
	return str.split("").sort().join("")
}
