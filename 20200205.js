function canCapture([yourRook, opponentsRook]) {
	const arr1 = [...yourRook];
	const arr2 = [...opponentsRook];
	return (arr1[0] === arr2[0] || arr1[1] ===arr2[1]) ? true:false;
}