function getStudentNames(students) {
	return students.map(student => student.name)
} 

function profit(info) {
	return Math.round((info.sellPrice - info.costPrice)*info.inventory)
}