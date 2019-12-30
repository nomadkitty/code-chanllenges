function missingAngle(angle1, angle2) {
	let angle3 = 180-angle1-angle2
	if(angle3<90){
		return "acute"
	} else if(angle3>90){
		return "obtuse"
	} else {
		return "right"
	}
}