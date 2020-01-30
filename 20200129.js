function profitMargin(costPrice, salesPrice) {
	return ((salesPrice-costPrice)/salesPrice*100).toFixed(1)+"%"
}